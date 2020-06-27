import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { TransformControls, OrbitControls } from 'drei'
import { setOrbitEnabled } from '../actions/controls';
import { objectTranslateEnd } from '../actions/scene';

function ExperienceControls(props) {
  const { controlledObject, objectTranslateEnd, transformMode } = props;

  const transform = useRef();

  const onDragChange = e => {
    controlledObject.exp_skipNextUpdate = true;
    props.setOrbitEnabled(!e.value);

    if (!e.value) {
      objectTranslateEnd(controlledObject);
    }
  };

  useEffect(() => {
    const controls = transform.current;

    if (!controls) {
      return null;
    }

    if (controlledObject) {
      controls.attach(controlledObject);
    } else {
      controls.detach();
    }

    controls.addEventListener('dragging-changed', onDragChange);
    return () => controls.removeEventListener('dragging-changed', onDragChange);
  });

  return (
    <React.Fragment>
      {/* <TransformControls ref={transform} mode="rotate"></TransformControls> */}
      <TransformControls
        ref={transform}
        position={[2,2,0]}
        mode={transformMode}
      />

      <OrbitControls
        enabled={props.isOrbitEnabled}
        enableDamping={true}
      />
    </React.Fragment>
  );
}

const mapStateToProps = ({ controls }, ownProps) => ({
  isOrbitEnabled: controls.isOrbitEnabled,
  transformMode: controls.transformMode,
  controlledObject: controls.controlledObject,
});

const mapDispatchToProps = {
  setOrbitEnabled,
  objectTranslateEnd,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceControls)
