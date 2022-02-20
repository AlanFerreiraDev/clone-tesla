import React, { useEffect, useRef } from 'react';

import useModel from '../useModel';

import { ModelSectionProps } from './interfaces';

import { Container } from './styles';

const ModelSection = ({
  modelName,
  overlayNode,
  children,
  ...rest
}: ModelSectionProps) => {
  const { registerModel } = useModel(modelName);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({ modelName, overlayNode, sectionRef });
    }
  }, []);
  return (
    <Container ref={sectionRef} {...rest}>
      {children}
    </Container>
  );
};

export default ModelSection;
