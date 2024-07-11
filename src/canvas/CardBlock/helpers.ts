import theme from '@/theme';

export const getColorStyle = (textColorVariant?: Types.AvailableTextColorVariant) => {
  return textColorVariant === 'Light'
    ? {
        color: theme.colors.primaryContent,
      }
    : {
        color: theme.colors.secondaryContent,
      };
};
