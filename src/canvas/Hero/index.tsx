import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { ComponentProps } from '@uniformdev/canvas-react';
import type { Asset } from '@uniformdev/assets';
import theme from '@/theme';
import { ContainerProps } from '../../components/Container';
import { HeroBackgroundImage } from './HeroBackgroundImage';
import { HeroDefault } from './Hero';

export const DEFAULT_TEXT_COLOR = '#000';
export const DEFAULT_BG_COLOR = '#fff';

type Styles = {
  eyebrowText?: string;
  title?: string;
  description?: string;
  descriptionSeparator?: string;
  sideImage?: string;
  textAlign?: string;
};

export type HeroProps = ComponentProps<
  ContainerProps & {
    eyebrowText: string;
    title: string;
    titleStyle: Types.HeadingStyles;
    description: string;
    image?: string | Asset;
    video?: string;
    primaryButtonCopy: string;
    primaryButtonLink: Types.ProjectMapLink;
    primaryButtonStyle: Types.ButtonStyles;
    primaryButtonAnimationType?: Types.AnimationType;
    secondaryButtonCopy: string;
    secondaryButtonLink: Types.ProjectMapLink;
    secondaryButtonStyle: Types.ButtonStyles;
    secondaryButtonAnimationType?: Types.AnimationType;
    overlayColor?: Types.AvailableColor;
    overlayOpacity?: Types.AvailableOpacity;
    objectFit?: Types.AvailableObjectFit;
    useCustomTextElements?: boolean;
    fullHeight?: boolean;
    animationType?: Types.AnimationType;
    animationOrder?: Types.AnimationOrder;
    duration?: Types.DurationType;
    textColor?: Types.ThemeColorsValues | string;
    backgroundColor?: Types.ThemeColorsValues | string;
    delay?: Types.AnimationDelay;
    animationPreview?: boolean;
    styles?: Styles;
  }
>;

export enum HeroVariant {
  ImageLeft = 'imageLeft',
  ImageRight = 'imageRight',
  BackgroundImage = 'backgroundImage',
  TwoColumns = 'twoColumns',
}

const Hero: FC<HeroProps> = props => {
  const { variant } = props.component || {};
  switch (variant) {
    case HeroVariant.ImageRight:
    case HeroVariant.ImageLeft:
    case HeroVariant.TwoColumns:
    case HeroVariant.BackgroundImage:
      return <HeroBackgroundImage {...props} />;
    default:
      return <HeroDefault {...props} />;
  }
};

export const heroMappings = {
  hero: Hero,
};

export const heroBaseStyles = StyleSheet.create({
  container: {
    height: 500,
    width: '100%',
  },
  imageOverlayWrapper: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  overlayColor: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
    zIndex: 1,
  },
  contentWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: theme.colors.primaryContent,
    paddingHorizontal: 20,
  },
  eyebrowText: {
    color: theme.colors.secondary,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    color: theme.colors.primaryContent,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  descriptionSeparator: {
    backgroundColor: theme.colors.secondary,
    marginHorizontal: 'auto',
    height: 4,
    width: 96,
  },
  description: {
    color: theme.colors.primaryContent,
    paddingVertical: 20,
    width: '100%',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
});
