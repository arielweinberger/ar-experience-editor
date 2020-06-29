import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import styles from './Overlay.module.scss';
import { connect } from 'react-redux';
import TransformIndicators from './TransformIndicators/TransformIndicators';
import UISection from '../../components/Overlay/UISection/UISection';
import ObjectCatalog from '../../components/Overlay/ObjectCatalog/ObjectCatalog';

export const Overlay = () => {
  return (
    <React.Fragment>
      <TransformIndicators />

      <div className={styles.leftPane}>
        <UISection>
          <ObjectCatalog />
        </UISection>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
