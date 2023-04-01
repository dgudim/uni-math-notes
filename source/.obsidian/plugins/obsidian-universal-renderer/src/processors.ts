import { MarkdownPostProcessorContext } from 'obsidian';
import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';
import { spawn } from 'child_process';
import GraphvizPlugin from './main';

import { GraphvizSettings } from './setting';

import * as crypto from 'crypto';
const md5 = (contents: string) => crypto.createHash('md5').update(contents).digest('hex');

type RenderType = 'dot' | 'latex' | 'ditaa';

export class Processors {
    pluginSettings: GraphvizSettings;
    renderTypeMapping: Map<RenderType, (source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) => Promise<unknown> | void>;

    constructor(plugin: GraphvizPlugin) {
        this.pluginSettings = plugin.settings;
        this.renderTypeMapping = new Map<RenderType, (source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) => Promise<unknown> | void>([
            ['latex', this.latexProcessor],
            ['dot', this.dotProcessor],
            ['ditaa', this.ditaaProcessor]
        ]);
    }

    private getRendererParameters(type: RenderType, sourceFile: string): [string, string, string[]] {
        let outputFile: string;
        switch (type) {
            case 'dot':
                outputFile = `${sourceFile}.svg`;
                return [this.pluginSettings.dotPath, outputFile, ['-Tsvg', sourceFile, '-o', outputFile]];
            case 'latex':
                outputFile = `${sourceFile}.png`;
                return [this.pluginSettings.pdflatexPath, outputFile, ['-shell-escape', '-output-directory', this.getTempDir(type), sourceFile]];
            case 'ditaa':
                outputFile = `${sourceFile}.svg`;
                return [this.pluginSettings.ditaaPath, outputFile, [sourceFile, '--transparent', '--svg', '--overwrite']];
        }
    }

    private spawnProcess(cmdPath: string, parameters: string[]): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            console.debug(`Starting external process ${cmdPath}, ${parameters}`);
            const process = spawn(cmdPath, parameters);
            let errData = '';
            process.stderr.on('data', (data) => { errData += data; });
            process.on('error', (err: Error) => reject(`"${cmdPath} ${parameters}" failed, ${err}`));
            process.stdin.end();

            process.on('exit', (code) => {
                if (code !== 0) {
                    return reject(`"${cmdPath} ${parameters}" failed, error code: ${code}, stderr: ${errData}`);
                }
                resolve('ok');
            });
        });
    }

    private async writeRenderedFile(sourceFile: string, type: RenderType): Promise<string> {

        const [cmdPath, outputFile, params] = this.getRendererParameters(type, sourceFile);

        if (fs.existsSync(outputFile)) {
            return outputFile;
        }

        await this.spawnProcess(cmdPath, params);
        if (type === 'latex') {
            await this.spawnProcess(this.pluginSettings.imageMagickConvertPath, ['-density', '300', '-units', 'PixelsPerInch', `${sourceFile}.pdf[0]`, outputFile]);
        }

        return outputFile;
    }

    private getTempDir(type: RenderType): string {
        return path.join(os.tmpdir(), `obsidian-${type}`);
    }

    private preprocessSource(type: RenderType, source: string) {
        switch (type) {
            case 'dot':
                return source
                    .replaceAll('color=brightwhite', 'color="#FBF1C7"')
                    .replaceAll('color=white', 'color="#EBDBB2"')
                    .replaceAll('color=lightgray', 'color="#BDAE93"')
                    .replaceAll('color=gray', 'color="#928374"')
                    .replaceAll('color=darkgray', 'color="#665C54')
                    .replaceAll('color=green', 'color="#b8bb26"')
                    .replaceAll('color=darkgreen', 'color="#98971A"')
                    .replaceAll('color=aqua', 'color="#8ec07c"')
                    .replaceAll('color=darkaqua', 'color="#689D6A"')
                    .replaceAll('color=red', 'color="#fb4934"')
                    .replaceAll('color=darkred', 'color="#CC241D"')
                    .replaceAll('color=yellow', 'color="#fabd2f"')
                    .replaceAll('color=darkyellow', 'color="#D79921"')
                    .replaceAll('color=blue', 'color="#83a598"')
                    .replaceAll('color=darkblue', 'color="#458588"')
                    .replaceAll('color=purple', 'color="#D3869B"')
                    .replaceAll('color=darkpurple', 'color="#B16286"')
                    .replaceAll('color=orange', 'color="#FE8019"')
                    .replaceAll('color=darkorange', 'color="#D65D0E"');
        }
    }

    private async convertToImage(type: RenderType, source: string): Promise<string> {

        const dir = this.getTempDir(type);
        const file = path.join(dir, md5(source));

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        if (!fs.existsSync(file)) {
            fs.writeFileSync(file, this.preprocessSource(type, source));
        }
        return this.writeRenderedFile(file, type);
    }

    private async imageProcessor(source: string, el: HTMLElement, _: MarkdownPostProcessorContext, type: RenderType): Promise<void> {
        try {
            console.debug(`Call image processor for ${type}`);

            if (type === 'dot' && source.trimEnd().at(-1) != '}') {
                console.error('Bad source, won\'t render');
                return;
            }

            const imagePath = await this.convertToImage(type, source);
            const img = document.createElement('img');
            img.src = `app://local${imagePath}`;
            el.appendChild(img);
        } catch (errMessage) {
            console.error('convert to image error: ' + errMessage);
            const pre = document.createElement('pre');
            const code = document.createElement('code');
            pre.appendChild(code);
            code.setText(errMessage);
            el.appendChild(pre);
        }
    }

    public async ditaaProcessor(source: string, el: HTMLElement, _: MarkdownPostProcessorContext): Promise<void> {
        return this.imageProcessor(source, el, _, 'ditaa');
    }

    public async dotProcessor(source: string, el: HTMLElement, _: MarkdownPostProcessorContext): Promise<void> {
        return this.imageProcessor(source, el, _, 'dot');
    }

    public async latexProcessor(source: string, el: HTMLElement, _: MarkdownPostProcessorContext): Promise<void> {
        return this.imageProcessor(source, el, _, 'latex');
    }

}
