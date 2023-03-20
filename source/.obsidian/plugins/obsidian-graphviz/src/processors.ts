import { MarkdownPostProcessorContext } from 'obsidian';
import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';
import { spawn } from 'child_process';
import { createHash } from 'crypto';
import GraphvizPlugin from './main';

import * as crypto from 'crypto';
const md5 = (contents: string) => crypto.createHash('md5').update(contents).digest('hex');

// import {graphviz} from 'd3-graphviz'; => does not work, ideas how to embed d3 into the plugin?

export class Processors {
  plugin: GraphvizPlugin;

  constructor(plugin: GraphvizPlugin) {
    this.plugin = plugin;
  }

  imageMimeType = new Map<string, string>([
    ['png', 'image/png'],
    ['svg', 'image/svg+xml']
  ]);

  private async writeDotFile(sourceFile: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const cmdPath = this.plugin.settings.dotPath;
      const imageFormat = this.plugin.settings.imageFormat;
      const out = `${sourceFile}.${imageFormat}`;

      if (fs.existsSync(out)) {
        return resolve(out);
      }

      const parameters = [`-T${imageFormat}`, sourceFile, '-o', out];

      console.debug(`Starting dot process ${cmdPath}, ${parameters}`);
      const dotProcess = spawn(cmdPath, parameters);
      let errData = '';

      dotProcess.stderr.on('data', (data) => {
        errData += data;
      });
      dotProcess.stdin.end();

      dotProcess.on('exit', (code) => {
        if (code !== 0) {
          return reject(`"${cmdPath} ${parameters}" failed, error code: ${code}, stderr: ${errData}`);
        }
        return resolve(out);
      });

      dotProcess.on('error', (err: Error) => reject(`"${cmdPath} ${parameters}" failed, ${err}`));
    });
  }

  private async convertToImage(source: string): Promise<string> {
    const self = this;

    const dir = path.join(os.tmpdir(), 'obsidian-dot');
    const file = path.join(dir, md5(source));

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, source);
    }
    return self.writeDotFile(file);
  }

  public async imageProcessor(source: string, el: HTMLElement, _: MarkdownPostProcessorContext): Promise<void> {
    try {
      console.debug('Call image processor');

      if (source.trimEnd().at(-1) != '}') {
        console.error('Bad dot source, won\'t render');
        return;
      }

      const imagePath = await this.convertToImage(source);
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

  public async d3graphvizProcessor(source: string, el: HTMLElement, _: MarkdownPostProcessorContext): Promise<void> {
    console.debug('Call d3graphvizProcessor');
    const div = document.createElement('div');
    const graphId = 'd3graph_' + createHash('md5').update(source).digest('hex').substring(0, 6);
    div.setAttr('id', graphId);
    div.setAttr('style', 'text-align: center');
    el.appendChild(div);
    const script = document.createElement('script');
    // graphviz(graphId).renderDot(source); => does not work, ideas how to use it?
    // Besides, sometimes d3 is undefined, so there must be a proper way to integrate d3.
    const escapedSource = source.replaceAll('\\', '\\\\').replaceAll('`', '\\`');
    script.text =
      `if( typeof d3 != 'undefined') { 
        d3.select("#${graphId}").graphviz()
        .onerror(d3error)
       .renderDot(\`${escapedSource}\`);
    }
    function d3error (err) {
        d3.select("#${graphId}").html(\`<div class="d3graphvizError"> d3.graphviz(): \`+err.toString()+\`</div>\`);
        console.error('Caught error on ${graphId}: ', err);
    }`;
    el.appendChild(script);
  }
}
