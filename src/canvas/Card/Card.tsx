import { getMediaUrl } from '@/utilities';
import React, { FC } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import theme from '@/theme';
import { getBadgeColorStyle, getBadgeSizeStyle, getColorStyle } from './helpers';
import { CardProps, CardVariants } from './';
import Button from '@/components/Button';
import { getImageOverlayColorStyle, getImageOverlayOpacityStyle, getObjectFitStyle } from '@/utilities/styling';

export const Card: FC<CardProps> = ({
  image,
  badge = '',
  badgeSize = 'md',
  badgeStyle = 'secondary',
  buttonStyle,
  title,
  buttonCopy,
  description,
  lineCountRestriction,
  overlayOpacity,
  overlayColor,
  objectFit = 'cover',
  component: { variant } = {},
  textColorVariant = 'Dark',
}) => {
  const colorStyle = getColorStyle(textColorVariant);

  return (
    <View style={[styles.container, variant === CardVariants.BackgroundImage && styles.containerWithPadding]}>
      <View
        style={[
          styles.imageContainer,
          variant === CardVariants.BackgroundImage && styles.absoluteImageContainer,
          variant === CardVariants.Featured && styles.imageFeatured,
        ]}
      >
        <View style={styles.imageOverlayWrapper}>
          <View
            style={[
              styles.overlayColor,
              getImageOverlayColorStyle(overlayColor),
              getImageOverlayOpacityStyle(overlayOpacity),
            ]}
          />
          <Image source={{ uri: getMediaUrl(image) }} style={[styles.image, getObjectFitStyle(objectFit)]} />
        </View>
      </View>
      <View style={styles.badgeContainer}>
        <View style={[styles.badge, getBadgeColorStyle(badgeStyle)]}>
          <Text style={getBadgeSizeStyle(badgeSize)}>{badge}</Text>
        </View>
      </View>

      <View style={styles.cardBody}>
        <Text style={[styles.title, colorStyle]}>{title}</Text>
        <Text
          style={[styles.description, colorStyle]}
          numberOfLines={lineCountRestriction === 'none' ? undefined : Number(lineCountRestriction)}
        >
          {description}
        </Text>
      </View>

      {buttonCopy && <Button copy={buttonCopy} style={buttonStyle} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  containerWithPadding: {
    padding: 20,
  },
  imageContainer: {
    height: 200,
  },
  imageFeatured: {
    height: 100,
    width: 100,
  },
  absoluteImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: 300,
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
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  imageOverlayWrapper: {
    height: '100%',
    width: '100%',
  },
  badgeContainer: {
    alignItems: 'flex-start',
  },
  badge: {
    padding: 5,
    borderRadius: 10,
    width: 'auto',
  },
  cardBody: {
    gap: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    minHeight: 50,
  },
  description: {
    color: theme.colors.secondaryContent,
    fontSize: 16,
  },
});
