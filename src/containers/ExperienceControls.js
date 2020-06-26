import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { TransformControls, OrbitControls, Box } from 'drei'
import { setOrbitEnabled } from '../actions/controls';

function ExperienceControls(props) {
  const transform = useRef();

  useEffect(() => {
    if (transform.current) {
      const controls = transform.current;
      const onDragChange = e => props.setOrbitEnabled(!e.value);
      controls.addEventListener('dragging-changed', onDragChange);
      return () => controls.removeEventListener('dragging-changed', onDragChange);
    }
  });

  return (
    <React.Fragment>
      {/* <TransformControls ref={transform} mode="rotate"></TransformControls> */}
      <TransformControls
        // mode={props.transformMode}
        ref={transform}
      >
        <Box scale={[1, 1, 1]} />
      </TransformControls>

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
});

const mapDispatchToProps = {
  setOrbitEnabled
};

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceControls)
