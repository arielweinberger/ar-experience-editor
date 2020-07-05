import React from 'react'
import { Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import styles from './TransformIndicators.module.scss';
import { setTransformMode } from '../../actions/controls';

function TransformIndicators(props) {
  const { setTransformMode } = props;

  const buttons = [
    {
      description: 'Rotate',
      icon: 'sync alternate',
      onClick: () => setTransformMode('rotate'),
    },
    {
      description: 'Translate',
      icon: 'arrows alternate',
      onClick: () => setTransformMode('translate'),
    },
    {
      description: 'Scale',
      icon: 'expand',
      onClick: () => setTransformMode('scale'),
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

const mapStateToProps = ({ controls }) => ({
  enabled: Boolean(controls.controlledObject)
});

const mapDispatchToProps = {
  setTransformMode,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransformIndicators);