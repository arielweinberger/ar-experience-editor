import { SceneObject } from './SceneObject';

export class PrimitiveSceneObject extends SceneObject {
  type: 'primitive';

  constructor(public name: string, public subtype: string) {
    super();
  }
}