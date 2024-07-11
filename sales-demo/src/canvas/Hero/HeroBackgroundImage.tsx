import React, { FC } from 'react';
import { View, Text, Image, Dimensions, NativeModules } from 'react-native';
import Video from 'react-native-video';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { formatProjectMapLink, getMediaUrl, REGEX_COLOR_HEX } from '@/utilities';
import {
  getImageOverlayColorStyle,
  getImageOverlayOpacityStyle,
  getObjectFitStyle,
  getTextClass,
  getTextColor,
} from '@/utilities/styling';
import Container, { ContainerProps as BaseContainerProps } from '@/components/Container';
import Button from '@/components/Button';
import { DEFAULT_TEXT_COLOR, DEFAULT_BG_COLOR, HeroProps, heroBaseStyles } from './';

const { HEIGHT: STATUS_BAR_HEIGHT } = NativeModules.StatusBarManager;

export const HeroBackgroundImage: FC<HeroProps> = ({
  eyebrowText,
  title,
  titleStyle = 'h1',
  description,
  image,
  video,
  primaryButtonCopy,
  primaryButtonLink,
  primaryButtonStyle = 'primary',
  secondaryButtonCopy,
  secondaryButtonLink,
  secondaryButtonStyle = 'primary',
  overlayOpacity,
  overlayColor,
  objectFit,
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

  const imageUrl = getMediaUrl(image);
  const videoUrl = getMediaUrl(video);

  const { height } = Dimensions.get('window');
  const tabBarHeight = useBottomTabBarHeight();

  const screenHeight = height - STATUS_BAR_HEIGHT - tabBarHeight;

  return (
    <Container {...containerProps}>
      <View style={[heroBaseStyles.container, fullHeight && { height: screenHeight }]}>
        <View style={heroBaseStyles.imageOverlayWrapper}>
          <View
            style={[
              heroBaseStyles.overlayColor,
              getImageOverlayColorStyle(overlayColor),
              getImageOverlayOpacityStyle(overlayOpacity),
            ]}
          />
          {videoUrl ? (
            <Video
              source={{ uri: videoUrl }}
              muted={true}
              repeat={true}
              style={[heroBaseStyles.image, getObjectFitStyle(objectFit)]}
              resizeMode="cover"
              rate={1.0}
              ignoreSilentSwitch="obey"
            />
          ) : (
            <Image source={{ uri: imageUrl }} style={[heroBaseStyles.image, getObjectFitStyle(objectFit)]} />
          )}
        </View>
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
