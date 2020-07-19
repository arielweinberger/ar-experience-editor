import { Scene, Vector3, Euler } from 'three';
import { SceneObject } from './lib/SceneObject';

export interface SceneState {
  scene: Scene;
  objects: SceneObject[];
}

export interface ThreeObjectProperties {
  scale: Vector3;
  position: Vector3;
  rotation: Euler;
}

export interface Keyframe {
  keyframeId: string,
  time: number;
}