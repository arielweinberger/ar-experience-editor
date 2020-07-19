import { ThreeObjectProperties, Keyframe } from '../types';

export class SceneObject {
  sceneObjectId: string;
  threeProperties: ThreeObjectProperties;
  keyframes: Keyframe[] = [];
}
