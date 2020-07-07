import React from 'react';
import './TransformDetails.scss';
import NumericInput from '../NumericInput';
import { connect } from 'react-redux';
import { objectTranslateEnd } from '../../../actions/scene';

const TransformDetails = ({ object, objectTranslateEnd }) => {
  const { position, scale, rotation } = object;

  console.log('TransformDetails', object);

  console.log('obj', object);

  const metrics = {
    position: {
      name: 'position',
      properties: ['x', 'y', 'z'],
    },
    scale: {
      name: 'scale',
      properties: ['x', 'y', 'z'],
    },
    rotation: {
      name: 'rotation',
      properties: ['x', 'y', 'z'],
    }
  };

  const renderMetric = metric => metric.properties.map(property => (
    <NumericInput
      key={`${metric.name}.${property}`}
      value={object[metric.name][property]}
      onChangeApplied={val => {
        object[metric.name][property] =  val
        objectTranslateEnd();
      }} />
  ));

  return (
    <div className="transformDetailsContainer">
      <h3>Position</h3>
      <div className="metric">
        {renderMetric(metrics.position)}
      </div>

      <h3>Scale</h3>
      <div className="metric">
        {renderMetric(metrics.scale)}
      </div>


      <h3>Rotation</h3>
      <div className="metric">
        {renderMetric(metrics.rotation)}
      </div>
    </div>
  );
};

const mapStateToProps = ({ scene }) => ({
  sceneObjects: scene.objects,
});

export default connect(mapStateToProps, { objectTranslateEnd })(TransformDetails)
