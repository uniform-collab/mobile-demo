import React, { FC } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { ContainerProps } from '@/components';
import {
  BackgroundTypes,
  ContainerVariants,
  getBackgroundClass,
  getBackgroundColor,
  getMarginsPaddingsStyle,
} from '@/utilities/styling.ts';
import { REGEX_COLOR_HEX } from '@/utilities';

export const Container: FC<ContainerProps> = ({
  backgroundType = BackgroundTypes.Transparent,
  marginTop,
  marginBottom,
  paddingTop,
  paddingBottom,
  fullHeight,
  containerVariant,
  children,
}) => {
  const deviceHeight = Dimensions.get('window').height;

  const currentColor = REGEX_COLOR_HEX.test(backgroundType) ? backgroundType : undefined;
  const backgroundStyle = (() => {
    const fixedBackgroundStyle = getBackgroundClass(backgroundType as BackgroundTypes);
    if (fixedBackgroundStyle) {
      return fixedBackgroundStyle;
    } else {
      return currentColor
        ? { backgroundColor: currentColor }
        : getBackgroundColor(backgroundType as Types.ThemeColorsValues);
    }
  })();

  return (
    <View
      style={[
        containerVariant !== ContainerVariants.FluidContent && styles.container,
        fullHeight && { height: deviceHeight },
        backgroundStyle,
        getMarginsPaddingsStyle(marginTop, 'marginTop'),
        getMarginsPaddingsStyle(marginBottom, 'marginBottom'),
        getMarginsPaddingsStyle(paddingTop, 'paddingTop'),
        getMarginsPaddingsStyle(paddingBottom, 'paddingBottom'),
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
