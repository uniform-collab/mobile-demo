import { PropsWithChildren } from 'react';
import { BackgroundTypes, ContainerVariants, PaddingSize } from '@/utilities/styling.ts';

export type ContainerProps = {
  backgroundType?: BackgroundTypes | Types.ThemeColorsValues | string;
  paddingTop?: PaddingSize;
  paddingBottom?: PaddingSize;
  marginTop?: PaddingSize;
  marginBottom?: PaddingSize;
  backgroundClassName?: string;
  fullHeight?: boolean;
  containerVariant?: ContainerVariants;
  className?: string;
} & PropsWithChildren;

export { Container as default } from './Container';
