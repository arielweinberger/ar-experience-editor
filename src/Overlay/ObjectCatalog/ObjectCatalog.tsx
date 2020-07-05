import React from 'react';
import PrimitiveObject from './PrimitiveObject';
import { connect } from 'react-redux';
import { addSceneObject } from '../../actions/scene';

const ObjectCatalog = (props) => {
  const { addSceneObject } = props;

  const handlePrimitiveObjectClick = (type: string) => {
    console.log('clickPrimitive', type);
    addSceneObject({
      type: 'primitive',
      subtype: type,
    });
  };

  return (
    <React.Fragment>
      <PrimitiveObject objectType="Box" onClick={() => handlePrimitiveObjectClick('Box')} />
      <PrimitiveObject objectType="Cylinder"  onClick={() => handlePrimitiveObjectClick('Cylinder')} />
      <PrimitiveObject objectType="Cone"  onClick={() => handlePrimitiveObjectClick('Cone')} />
    </React.Fragment>
  );
};

const mapStateToProps = ({ scene }) => ({});

const mapDispatchToProps = {
  addSceneObject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ObjectCatalog);
