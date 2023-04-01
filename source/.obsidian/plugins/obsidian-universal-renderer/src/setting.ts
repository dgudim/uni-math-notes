import { PluginSettingTab, Setting } from 'obsidian';
import GraphvizPlugin from './main';

export type GraphvizSettings = {
  dotPath: string;
  pdflatexPath: string;
  imageMagickConvertPath: string;
  ditaaPath: string;
}

export const DEFAULT_SETTINGS: GraphvizSettings = {
  dotPath: 'dot',
  pdflatexPath: 'pdflatex',
  imageMagickConvertPath: 'convert',
  ditaaPath: 'ditaa'
};

export class GraphvizSettingsTab extends PluginSettingTab {
  plugin: GraphvizPlugin;

  constructor(plugin: GraphvizPlugin) {
    super(plugin.app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;

    containerEl.empty();

    let setting: keyof typeof DEFAULT_SETTINGS; // extract all keys

    for (setting in DEFAULT_SETTINGS) {
      new Setting(containerEl).setName(setting)
        .addText(text => text.setPlaceholder(DEFAULT_SETTINGS[setting])
          .setValue(this.plugin.settings[setting])
          .onChange(async (value) => {
            this.plugin.settings[setting] = value;
            await this.plugin.saveSettings();
          }
          )
        );
    }
  }
}
