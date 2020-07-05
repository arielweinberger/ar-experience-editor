import React from 'react';
import PrimitiveObject from './PrimitiveObject';
import { connect } from 'react-redux';

const ObjectCatalog = () => {
  const handlePrimitiveObjectClick = (type: string) => {
    
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

};

export default connect(mapStateToProps, mapDispatchToProps)(ObjectCatalog);
