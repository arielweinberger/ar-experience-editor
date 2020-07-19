import React from 'react'
import { Button, Icon, SemanticICONS } from 'semantic-ui-react';
import styled from '@emotion/styled';
import { useControls } from '../../hooks/experienceHooks';

const ButtonsContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  padding: 8px;
  z-index: 1;
`;

const ButtonContainer = styled.div`
  margin-bottom: 8px;
`;

const TransformButton = styled(Button)`
  display: block;
`;

interface TransformButton {
  description: string;
  icon: SemanticICONS,
  onClick: () => MouseEvent,
}

export default function TransformIndicators() {
  const { setTransformMode } = useControls();

  const buttons: TransformButton[] = [
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
    <ButtonContainer>
      <TransformButton
        icon
        onClick={button.onClick}
      >
        <Icon name={button.icon} />
      </TransformButton>
    </ButtonContainer>
  ));

  return (
    <ButtonsContainer>
      {renderButtons()}
    </ButtonsContainer>
  )
}