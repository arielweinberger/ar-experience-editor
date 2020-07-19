import React from 'react';
import NumericInput from '../NumericInput';
import styled from '@emotion/styled';

const Heading = styled.h3`
  margin: 0;
  margin-bottom: 8px;
  font-size: 14px;
`;

const Metric = styled.div`
  input {
    width: 70px;
    padding: 0;
  }
`;

export default function TransformDetails({ object, onTransformChange }) {
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
        onTransformChange(object);
      }} />
  ));

  return (
    <div>
      <Heading>Position</Heading>
      <Metric>
        {renderMetric(metrics.position)}
      </Metric>

      <Heading>Scale</Heading>
      <Metric>
        {renderMetric(metrics.scale)}
      </Metric>


      <Heading>Rotation</Heading>
      <Metric>
        {renderMetric(metrics.rotation)}
      </Metric>
    </div>
  );
};