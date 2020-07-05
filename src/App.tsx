import React from 'react';
import ExperienceCanvas from './Experience/containers/ExperienceCanvas';
import { Overlay } from './Overlay/Overlay';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.appWrapper}>
      {/* <Overlay /> */}
      <div className={styles.topBar}>
        Top bar
      </div>

      <div className={styles.centerContent}>
        <div className={styles.leftPanel}>
          Left Panel
        </div>

        <div className={styles.centerPanel}>
          <ExperienceCanvas />
        </div>

        <div className={styles.rightPanel}>
          Right Panel
        </div>
      </div>

      <div className={styles.bottomContent}>
        ctnt
      </div>
    </div>
  );
}

export default App;
