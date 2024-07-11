import theme from '@/theme';
import { CardProps } from './';

export const getBadgeColorStyle = (badgeStyle: CardProps['badgeStyle']) => {
  switch (badgeStyle) {
    case 'outline':
      return {
        backgroundColor: 'transparent',
        color: theme.colors.primary,
        border: `1px solid ${theme.colors.primary}`,
      };
    case 'primary':
      return {
        backgroundColor: theme.colors.primary,
        color: theme.colors.primaryContent,
      };
    case 'secondary':
      return {
        backgroundColor: theme.colors.secondary,
        color: theme.colors.secondaryContent,
      };
    case 'accent':
      return {
        backgroundColor: theme.colors.accent,
        color: theme.colors.accentContent,
      };
    default:
      return {};
  }
};

export const getBadgeSizeStyle = (badgeSize: CardProps['badgeSize']) => {
  switch (badgeSize) {
    case 'xs':
      return {
        fontSize: 12,
      };
    case 'sm':
      return {
        fontSize: 14,
      };
    case 'md':
      return {
        fontSize: 16,
      };
    case 'lg':
      return {
        fontSize: 18,
      };
    default:
      return {
        fontSize: 12,
      };
  }
};

export const getColorStyle = (textColorVariant?: Types.AvailableTextColorVariant) => {
  return textColorVariant === 'Light'
    ? {
        color: theme.colors.primaryContent,
      }
    : {
        color: theme.colors.secondaryContent,
      };
};
