import React, { useRef, useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import { useControl } from 'react-three-gui';
import Surface from '../components/Surface.js';
import { OrbitControls, TransformControls, Box } from 'drei';
import SceneObject from '../components/SceneObject.js';
import { useThree } from 'react-three-fiber';
import controlsActions from '../actions/controls';
import ExperienceControls from './ExperienceControls.js';

function ExperienceCanvas(props) {
  return (
    <React.Fragment>
      {/* Experience Objects */}
      <Suspense fallback={null}>
        <SceneObject scale={[1, 1, 1]} rotation={[1.55, 0, 0]} />
      </Suspense>

      {/* Base */}
      <ambientLight />
      <Surface position={[0, 0, 0]} />
      <axesHelper args={[10]} />

      {/* Controls */}
      <ExperienceControls />
    </React.Fragment>
  );
}

const mapStateToProps = ({ controls }, ownProps) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ExperienceCanvas));
