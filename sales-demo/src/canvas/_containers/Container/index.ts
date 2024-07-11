import { ComponentProps } from '@uniformdev/canvas-react';
import { ContainerProps as BaseContainerProps } from '../../../components/Container';
import { Container } from './Container';

export type ContainerProps = ComponentProps<BaseContainerProps>;

export const containerMappings = {
  container: Container,
};

export default Container;
