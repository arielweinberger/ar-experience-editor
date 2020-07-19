import { useSelector, useDispatch } from 'react-redux';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import TimelineActions from '../actions/timeline';

export default function useTimeline() {
  const timeline = useSelector(state => state.timeline.present);
  const dispatch = useDispatch();

  const onThumbLocationChange$ = new Subject();

  onThumbLocationChange$
    .pipe(debounceTime(300))
    .subscribe(value => dispatch(TimelineActions.setThumbLocation(value)));
  
  return {
    keyframes: timeline.keyframes,
    addKeyframe: (sceneObjectId, time) => dispatch(TimelineActions.addKeyframe(sceneObjectId, time)),
    deleteKeyframe: (sceneObjectId, keyframeId) => dispatch(TimelineActions.deleteKeyframe(sceneObjectId, keyframeId)),
    thumbLocation: timeline.thumbLocation,
    setThumbLocation(value) {
      onThumbLocationChange$.next(value);
    },
  }
}