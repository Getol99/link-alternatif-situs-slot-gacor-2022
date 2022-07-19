'use babel';

import LinkAlternatifSitusSlotGacor2022View from './link-alternatif-situs-slot-gacor-2022-view';
import { CompositeDisposable } from 'atom';

export default {

  linkAlternatifSitusSlotGacor2022View: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.linkAlternatifSitusSlotGacor2022View = new LinkAlternatifSitusSlotGacor2022View(state.linkAlternatifSitusSlotGacor2022ViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.linkAlternatifSitusSlotGacor2022View.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'link-alternatif-situs-slot-gacor-2022:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.linkAlternatifSitusSlotGacor2022View.destroy();
  },

  serialize() {
    return {
      linkAlternatifSitusSlotGacor2022ViewState: this.linkAlternatifSitusSlotGacor2022View.serialize()
    };
  },

  toggle() {
    console.log('LinkAlternatifSitusSlotGacor2022 was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
