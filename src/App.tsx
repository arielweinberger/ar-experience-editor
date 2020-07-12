import React from 'react';
import { connect } from 'react-redux';
import { HotKeys } from 'react-hotkeys';
import ExperienceCanvas from './Experience/containers/ExperienceCanvas';
import styles from './App.module.scss';
import ObjectDetailsPanel from './Overlay/ObjectDetailsPanel/ObjectDetailsPanel';
import { ActionCreators as HistoryActionCreators } from 'redux-undo';
import ObjectCatalog from './Overlay/ObjectCatalog/ObjectCatalog';
import AnimationManager from './Overlay/AnimationManager/AnimationManager';

function App({ dispatch }) {
  const keyMap = {
    UNDO: ['command+z'],
    REDO: ['command+shift+z'],
  };

  const keyHandlers = {
    UNDO: () => dispatch(HistoryActionCreators.undo()),
    REDO: () => dispatch(HistoryActionCreators.redo()),
  };
  
  return (
    <div className={styles.appWrapper}>
      {/* <Overlay /> */}
      <div className={styles.topBar}>Top bar</div>

      <div className={styles.centerContent}>
        <div className={styles.leftPanel}>
          <ObjectCatalog />
        </div>

        <div className={styles.centerPanel}>
          <HotKeys
            keyMap={keyMap}
            handlers={keyHandlers}
            style={{ width: '100%', height: '100%' }}
          >
            <ExperienceCanvas />
          </HotKeys>
        </div>

        <div className={styles.rightPanel}>
          <ObjectDetailsPanel />
        </div>
      </div>

      <div className={styles.bottomContent}>
        {/* <Timeline /> */}
        <AnimationManager />
      </div>
    </div>
  );
}

export default connect()(App);
