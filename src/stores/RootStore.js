import ControlsStore from './ControlsStore';

export default class RootStore {
  constructor() {
    this.controlsStore = new ControlsStore(this);
  }
}