import React from 'react';

import { DefaultOverlayContentProps } from './interfaces';

import { Container, Heading, Buttons } from './styles';

const DefaultOverlayContent = ({
  label,
  description,
}: DefaultOverlayContentProps) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button>Custom Order</button>
        <button className="white">Existing Inventory</button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
