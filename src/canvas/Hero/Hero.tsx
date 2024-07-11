import React, { FC } from 'react';
import { View, Text, Dimensions, NativeModules } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { formatProjectMapLink, REGEX_COLOR_HEX } from '@/utilities';
import { getTextClass, getTextColor } from '@/utilities/styling.ts';
import Container, { ContainerProps as BaseContainerProps } from '@/components/Container';
import Button from '@/components/Button';
import { DEFAULT_BG_COLOR, DEFAULT_TEXT_COLOR, heroBaseStyles, HeroProps } from './';

const { HEIGHT: STATUS_BAR_HEIGHT } = NativeModules.StatusBarManager;

export const HeroDefault: FC<HeroProps> = ({
  eyebrowText,
  title,
  titleStyle = 'h1',
  description,
  primaryButtonCopy,
  primaryButtonLink,
  primaryButtonStyle = 'primary',
  secondaryButtonCopy,
  secondaryButtonLink,
  secondaryButtonStyle = 'primary',
  fullHeight,
  backgroundColor = DEFAULT_BG_COLOR,
  containerVariant,
  paddingBottom,
  paddingTop,
  marginBottom,
  marginTop,
  textColor = DEFAULT_TEXT_COLOR,
}) => {
  const currentColor = REGEX_COLOR_HEX.test(textColor || DEFAULT_TEXT_COLOR) ? textColor : undefined;
  const textColorStyle = currentColor
    ? { color: currentColor }
    : getTextColor(textColor as Types.ThemeColorsValues, DEFAULT_TEXT_COLOR);

  const containerProps: BaseContainerProps = {
    backgroundType: backgroundColor,
    containerVariant,
    marginTop,
    marginBottom,
    paddingTop,
    paddingBottom,
    fullHeight,
  };

  const { height } = Dimensions.get('window');
  const tabBarHeight = useBottomTabBarHeight();

  const screenHeight = height - STATUS_BAR_HEIGHT - tabBarHeight;

  return (
    <Container {...containerProps}>
      <View style={[heroBaseStyles.container, fullHeight && { height: screenHeight }]}>
        <View style={heroBaseStyles.contentWrapper}>
          <Text style={heroBaseStyles.eyebrowText}>{eyebrowText}</Text>
          <Text style={[heroBaseStyles.title, getTextClass(titleStyle), textColorStyle]}>{title}</Text>
          <View style={heroBaseStyles.descriptionSeparator} />
          <Text style={[heroBaseStyles.description, textColorStyle]}>{description}</Text>
          <View style={[heroBaseStyles.buttonsWrapper]}>
            {primaryButtonCopy && (
              <Button
                style={primaryButtonStyle}
                copy={primaryButtonCopy}
                href={formatProjectMapLink(primaryButtonLink)}
              />
            )}
            {secondaryButtonCopy && (
              <Button
                style={secondaryButtonStyle}
                copy={secondaryButtonCopy}
                href={formatProjectMapLink(secondaryButtonLink)}
              />
            )}
          </View>
        </View>
      </View>
    </Container>
  );
};
