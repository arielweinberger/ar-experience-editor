import { action } from 'mobx';

const initialState = [];

const addObject = (state = initialState, action) => {
  const { uuid, threeObject } = action;

  const object = {
    uuid,
    threeObject,
  };

  return [...state, object];
};

const objects = (state = [], action) => {
  switch(action.type) {
    case 'ADD_SCENE_OBJECT':
      return addObject(state, action);
    default:
      return state;
  } 
};

export default objects;