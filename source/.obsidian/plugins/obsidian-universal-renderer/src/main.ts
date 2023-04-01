import { Plugin } from 'obsidian';
import { DEFAULT_SETTINGS, GraphvizSettings, GraphvizSettingsTab } from './setting';
import { Processors } from './processors';

export default class GraphvizPlugin extends Plugin {
  settings: GraphvizSettings;

  async onload() {
    console.debug('Load universal renderer plugin');
    await this.loadSettings();
    this.addSettingTab(new GraphvizSettingsTab(this));
    const processors = new Processors(this);

    this.app.workspace.onLayoutReady(() => {
      for (const [type, func] of processors.renderTypeMapping) {
        this.registerMarkdownCodeBlockProcessor(type, func.bind(processors));
      }
    });
  }

  onunload() {
    console.debug('Unload universal renderer plugin');
  }

  async loadSettings(): Promise<void> {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    return Promise.resolve();
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
