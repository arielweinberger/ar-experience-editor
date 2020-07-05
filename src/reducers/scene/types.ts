import { Scene, Vector3, Euler } from 'three';

export interface SceneState {
  scene: Scene;
  objects: SceneObject[];
}

export interface SceneObjectTransform {
  scale: Vector3;
  position: Vector3;
  rotation: Euler;
}

export interface SceneObject {
  type: 'primitive' | 'gltf';
  sceneObjectId: string;
  transform: SceneObjectTransform;
}

export interface PrimitiveSceneObject extends SceneObject {
  name: string;
  type: 'primitive';
  subtype: string;
}