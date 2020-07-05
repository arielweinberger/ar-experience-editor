import { Scene, Vector3, Euler } from 'three';

export interface SceneState {
  scene: Scene;
  objects: SceneObject[];
}

export interface SceneObject {
  type: 'primitive' | 'gltf';
  sceneObjectId: string;
  transform: {
    scale: Vector3,
    position: Vector3,
    rotation: Euler,
  };
}

export interface PrimitiveSceneObject extends SceneObject {
  type: 'primitive';
}