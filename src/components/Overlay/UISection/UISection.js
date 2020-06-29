import React from 'react'
import styles from './UISection.module.scss';

export default function UISection({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Object Catalog</h2>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};
