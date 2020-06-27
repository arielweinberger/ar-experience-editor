import { uniqueId } from 'lodash';
import { Vector3 } from 'three';

const initialState = {
  scene: null,
  objects: JSON.parse(localStorage.getItem('exp_1_objects')) || [],
  // objects: [
  //   {
  //     sceneObjectId: 'sdj9191ddd',
  //     model: './models/person.gltf',
  //     transform: {
  //       scale: [1, 1, 1],
  //       position: [3, -3, 0],
  //       rotation: [0, 0, 0, 'XYZ'],
  //     }
  //   },
  // ],
};

const objectTranslateEnd = (state = initialState, action) => {
  const syncedObjects = state.objects.map(object => {
    const threeObject = state.scene.getObjectByProperty('exp_sceneObjectId', object.sceneObjectId);

    const transform = {
      scale: threeObject.scale.toArray(),
      position: threeObject.position.toArray(),
      rotation: threeObject.rotation.toArray(),
    };

    return {
      ...object,
      transform,
    }
  });

  localStorage.setItem('exp_1_objects', JSON.stringify(syncedObjects));
  return { ...state, objects: syncedObjects };
};

const addSceneObject = (state = initialState, action) => {
  const { transform } = action;

  const object = {
    name: 'Unnamed',
    model: './models/person.gltf',
    transform,
  };

  return {
    ...state,
    objects: [
      ...state.objects,
      object,
    ],
  };
};

const addBulkSceneObjects = (state = initialState, action) => {
  const { objects } = action;

  console.log('state', state);

  const finalObjects = objects.map(obj => ({
    sceneObjectId: uniqueId(),
    name: 'Unnamed',
    model: './models/person.gltf',
    transform: obj.transform,
  }));

  return { ...state, objects: finalObjects };
};

const registerObjectReference = (state = initialState, action) => {
  const { objectReference, sceneObjectId } = action;

  const objects = state.objects.map(object => {
    if (object.sceneObjectId !== sceneObjectId) {
      return object;
    } else {
      return {
        ...object,
        ref: objectReference,
      };
    }
  });
  return { ...state, objects };
};

const scene = (state = initialState, action) => {
  switch(action.type) {
    case 'REGISTER_SCENE':
      return { ...state, scene: action.scene };
    case 'ADD_SCENE_OBJECT':
      return addSceneObject(state, action);
    case 'ADD_BULK_SCENE_OBJECTS':
      return addBulkSceneObjects(state, action);
    case 'REGISTER_OBJECT_REFERENCE':
      return registerObjectReference(state, action);
    case 'OBJECT_TRANSLATE_END':
      return objectTranslateEnd(state, action);
    default:
      return state;
  } 
};

export default scene;