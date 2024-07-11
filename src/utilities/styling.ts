import theme from '@/theme';
import { ImageStyle, ViewStyle } from 'react-native';

export enum BackgroundTypes {
  Light = 'Light',
  Dark = 'Dark',
  Medium = 'Medium',
  Transparent = 'Transparent',
}

export enum PaddingSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  None = 'None',
}

export enum ContainerVariants {
  BackgroundInContainer = 'backgroundInContainer',
  FluidContent = 'fluidContent',
}

export const getTextClass = (style?: Types.HeadingStyles) => {
  switch (style) {
    case 'h1':
      return {
        fontSize: 50,
      };
    case 'h2':
      return {
        fontSize: 40,
      };
    case 'h3':
      return {
        fontSize: 30,
      };
    case 'h4':
      return {
        fontSize: 25,
      };
    case 'h5':
      return {
        fontSize: 25,
      };
    case 'h6':
      return {
        fontSize: 15,
      };
    default:
      return {
        fontSize: 12,
      };
  }
};

export const getButtonStyle = (style?: Types.ButtonStyles) => {
  switch (style) {
    case 'primary':
      return {
        backgroundColor: theme.colors.primary,
      };
    case 'secondary':
      return {
        backgroundColor: theme.colors.secondary,
      };
    case 'accent':
      return {
        backgroundColor: theme.colors.accent,
      };
    case 'ghost':
      return {
        backgroundColor: 'transparent',
        color: theme.colors.primary,
        border: `1px solid ${theme.colors.primary}`,
      };
    case 'link':
      return {};
    default:
      return {
        backgroundColor: theme.colors.primary,
      };
  }
};

export const getButtoneTextStyle = (style?: Types.ButtonStyles) => {
  switch (style) {
    case 'primary':
      return {
        color: theme.colors.primaryContent,
      };
    case 'secondary':
      return {
        color: theme.colors.secondaryContent,
      };
    case 'accent':
      return {
        color: theme.colors.accentContent,
      };
    case 'ghost':
      return {
        backgroundColor: 'transparent',
        color: theme.colors.primary,
        border: `1px solid ${theme.colors.primary}`,
      };
    case 'link':
      return {};
    default:
      return {
        color: theme.colors.primaryContent,
      };
  }
};

export const getObjectFitStyle = (objectFit?: Types.AvailableObjectFit): ImageStyle => {
  switch (objectFit) {
    case 'cover':
      return {
        objectFit: 'cover',
      };
    case 'contain':
      return {
        objectFit: 'contain',
      };
    case 'fill':
      return {
        objectFit: 'fill',
      };
    default:
      return {};
  }
};

export const getImageOverlayColorStyle = (style?: Types.AvailableColor): ViewStyle => {
  switch (style) {
    case 'primary':
      return {
        backgroundColor: theme.colors.primary,
      };
    case 'secondary':
      return {
        backgroundColor: theme.colors.secondary,
      };
    case 'accent':
      return {
        backgroundColor: theme.colors.accent,
      };
    case 'base-200':
      return {
        backgroundColor: theme.colors.base200,
      };
    case 'base-300':
      return {
        backgroundColor: theme.colors.base300,
      };
    default:
      return {};
  }
};

export const getImageOverlayOpacityStyle = (style?: Types.AvailableOpacity): ViewStyle => {
  switch (style) {
    case '0%':
      return {
        opacity: 0,
      };
    case '10%':
      return {
        opacity: 0.1,
      };
    case '20%':
      return {
        opacity: 0.2,
      };
    case '30%':
      return {
        opacity: 0.3,
      };
    case '40%':
      return {
        opacity: 0.4,
      };
    case '50%':
      return {
        opacity: 0.5,
      };
    case '60%':
      return {
        opacity: 0.6,
      };
    case '70%':
      return {
        opacity: 0.7,
      };
    case '80%':
      return {
        opacity: 0.8,
      };
    case '90%':
      return {
        opacity: 0.9,
      };
    case '100%':
      return {
        opacity: 1,
      };
    default:
      return {
        opacity: 0,
      };
  }
};

export const getMarginsPaddingsStyle = (padding: PaddingSize | undefined, name: string) => {
  switch (padding) {
    case PaddingSize.Large:
      return { [name]: 64 };
    case PaddingSize.Medium:
      return { [name]: 40 };
    case PaddingSize.Small:
      return { [name]: 24 };
    case PaddingSize.None:
      return { [name]: 0 };
    default:
      return {};
  }
};

export const getTextColor = (colorName: Types.ThemeColorsValues | undefined, defaultColor = '#000') => {
  switch (colorName) {
    case 'primary':
      return { color: theme.colors.primary };
    case 'primary-content':
      return { color: theme.colors.primaryContent };
    case 'secondary':
      return { color: theme.colors.secondary };
    case 'secondary-content':
      return { color: theme.colors.secondaryContent };
    case 'accent':
      return { color: theme.colors.accent };
    case 'accent-content':
      return { color: theme.colors.accentContent };
    case 'info-content':
      return { color: theme.colors.infoContent };
    case 'base-200':
      return { color: theme.colors.base200 };
    case 'base-300':
      return { color: theme.colors.base300 };
    default:
      return { color: defaultColor };
  }
};

export const getBackgroundColor = (colorName?: Types.ThemeColorsValues | undefined, defaultColor = '#fff') => {
  switch (colorName) {
    case 'primary':
      return { backgroundColor: theme.colors.primary };
    case 'primary-content':
      return { backgroundColor: theme.colors.primaryContent };
    case 'secondary':
      return { backgroundColor: theme.colors.secondary };
    case 'secondary-content':
      return { backgroundColor: theme.colors.secondaryContent };
    case 'accent':
      return { backgroundColor: theme.colors.accent };
    case 'accent-content':
      return { backgroundColor: theme.colors.accentContent };
    case 'info-content':
      return { backgroundColor: theme.colors.infoContent };
    case 'base-200':
      return { backgroundColor: theme.colors.base200 };
    case 'base-300':
      return { backgroundColor: theme.colors.base300 };
    default:
      return { backgroundColor: defaultColor };
  }
};

export const getBackgroundClass = (background?: BackgroundTypes) => {
  switch (background) {
    case BackgroundTypes.Transparent:
      return { backgroundColor: 'transparent' };
    case BackgroundTypes.Light:
      return { backgroundColor: '#f9fafb', color: 'black' };
    case BackgroundTypes.Medium:
      return { backgroundColor: '#9ca3af', color: 'black' };
    case BackgroundTypes.Dark:
      return { backgroundColor: theme.colors.base300, color: theme.colors.primaryContent };
    default:
      return null;
  }
};
