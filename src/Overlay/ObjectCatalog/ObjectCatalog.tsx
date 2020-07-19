import React from 'react';
import PrimitiveObject from './PrimitiveObject';
import { useDispatch } from 'react-redux';
import { addSceneObject } from '../../actions/scene';
import { useScene } from '../../hooks';

export default function ObjectCatalog() {
  const dispatch = useDispatch();

  const handlePrimitiveObjectClick = (type: string) => {
    console.log('a')
    dispatch(addSceneObject({
      type: 'primitive',
      subtype: type,
    }));
  };

  return (
    <React.Fragment>
      <PrimitiveObject objectType="Box" onClick={() => handlePrimitiveObjectClick('Box')} />
      <PrimitiveObject objectType="Cylinder"  onClick={() => handlePrimitiveObjectClick('Cylinder')} />
      <PrimitiveObject objectType="Cone"  onClick={() => handlePrimitiveObjectClick('Cone')} />
    </React.Fragment>
  );
};