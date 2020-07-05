import { pick } from 'lodash';

class SaveService {
  scene = null;
  objects = [];

  constructor() {
    // setInterval(() => {
    //   if (this.scene) {
    //     this.save();
    //   }
    // }, 3000);
  }

  // registerScene(scene) {
  //   this.scene = scene;
  //   console.log('[SaveService] Scene registered');
  // }

  // registerObject(obj, sceneObjectId) {
  //   console.log(`[SaveService] Registered object (id: ${obj.id})`);
  //   this.objects.push(obj);
  // }

  // deregisterObject(obj) {

  // }

  // objToSaveFormat(obj) {
  //   const transform = {
  //     position: Object.values(obj.position).map(value => value.toFixed(6)),
  //     rotation: Object.values(obj.rotation).slice(0, 3).map(value => value.toFixed(6)),
  //     scale: Object.values(obj.scale).map(value => value.toFixed(6)),
  //   }

  //   return {
  //     transform,
  //   };
  // }

  // parseSavedObject(obj) {
  //   const transform = {
  //     position: obj.transform.position.map(value => parseFloat(value)),
  //     rotation: obj.transform.rotation.map(value => parseFloat(value)),
  //     scale: obj.transform.scale.map(value => parseFloat(value)),
  //   };

  //   return {
  //     transform,
  //   };
  // }

  // save() {
  //   console.log('[SceneService] Saving');

  //   const objects = this.objects.map(obj => this.objToSaveFormat(obj));

  //   const saveData = {
  //     objects,
  //   };

  //   localStorage.setItem('exp_1', JSON.stringify(saveData));
  // }

  // load() {
  //   console.log('[SceneService] Loading');
  //   const loaded = localStorage.getItem('exp_1');
    
  //   if (!loaded) {
  //     return [];
  //   }

  //   const parsed = JSON.parse(loaded);

  //   const finalObjects = parsed.objects.map(obj => this.parseSavedObject(obj));

  //   return {
  //     objects: finalObjects,
  //   };
  // }
}

export default new SaveService();