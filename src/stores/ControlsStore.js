import { observable, action } from 'mobx';

export default class TransformStore {
  @observable
  orbit = null;

  @observable
  transform = null;

  @observable
  controlled = null;

  @action
  setControlled(obj) {
    console.log('Setting controlled object to', obj);
    this.controlled = obj;
    this.transform.attach(obj);
  }

  @action
  unsetControlled() {
    console.log('Unsetting controlled object');
    this.controlled = null;
    this.transform.detach();
  }

  registerOrbitControls(orbit) {
    console.log('Registering orbit controls');
    this.orbit = orbit;
  }

  registerTransformControls(transform) {
    console.log('Registering transform controls');
    this.transform = transform;
  }

  enableOrbit() {
    this.orbit.enabled = true;
  }

  disableOrbit() {
    this.orbit.enabled = false;
  }
}