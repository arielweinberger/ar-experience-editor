import React from 'react'
import { Button, Icon } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import styles from './TransformIndicators.module.scss';
import { setTransformMode } from '../../actions/controls';

export default function TransformIndicators() {
  const dispatch = useDispatch();

  const buttons = [
    {
      description: 'Rotate',
      icon: 'sync alternate',
      onClick: () => dispatch(setTransformMode('rotate')),
    },
    {
      description: 'Translate',
      icon: 'arrows alternate',
      onClick: () => dispatch(setTransformMode('translate')),
    },
    {
      description: 'Scale',
      icon: 'expand',
      onClick: () => dispatch(setTransformMode('scale')),
    },
  ];

  const renderButtons = () => buttons.map(button => (
    <div
      key={button.description}
      className={styles.buttonContainer}
    >
      <Button
        icon
        className={styles.button}
        onClick={button.onClick}
      >
        <Icon name={button.icon} />
      </Button>
    </div>
  ));

  return (
    <div className={styles.container}>
      {renderButtons()}
    </div>
  )
}