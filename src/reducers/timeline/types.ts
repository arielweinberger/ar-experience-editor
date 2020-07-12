export interface TimelineState {
  selectedKeyframe: string;
  keyframes: Keyframes;
}

export interface Keyframes {
  [objectName: string]: Keyframe[];
}

export interface Keyframe {
  id: string;
  objectName: string;
  time: number;
}