import React, { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-react';
import BaseContainer from '@/components/Container';
import { ContainerVariants } from '@/utilities/styling.ts';
import { ContainerProps } from './';

export const Container: FC<ContainerProps> = props => (
  <BaseContainer {...props} containerVariant={props?.component?.variant as ContainerVariants | undefined}>
    <UniformSlot name="container-inner" />
  </BaseContainer>
);
