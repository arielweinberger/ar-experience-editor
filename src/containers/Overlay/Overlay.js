import 'semantic-ui-css/semantic.min.css';
import React from 'react'
import styles from './Overlay.module.scss';
import { connect } from 'react-redux'
import TransformIndicators from './TransformIndicators/TransformIndicators';
import Toolbar from './Toolbar/Toolbar';

export const Overlay = () => {
  return (
    <div className={styles.container}>
      <Toolbar />
      <TransformIndicators />
    </div>
  );
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Overlay)
