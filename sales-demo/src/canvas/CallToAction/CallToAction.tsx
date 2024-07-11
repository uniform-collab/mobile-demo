import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '@/theme';
import { getTextClass } from '@/utilities/styling';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { getCallToActionButtonsStyle, getCallToActionContentStyle, getCallToActionTextStyle } from './helpers';
import { CallToActionProps } from '.';

export const CallToAction: FC<CallToActionProps> = ({
  titleStyle = 'h2',
  title,
  eyebrowText,
  description,
  primaryButtonCopy,
  primaryButtonLink,
  primaryButtonStyle,
  secondaryButtonCopy,
  secondaryButtonLink,
  secondaryButtonStyle,
  textColorVariant,
  component: { variant } = {},
}) => {
  const isLightTextColor = textColorVariant === 'Light';

  const eyebrowTextColorStyle = isLightTextColor ? { color: theme.colors.secondary } : { color: theme.colors.primary };
  const textColorStyle = isLightTextColor
    ? { color: theme.colors.primaryContent }
    : { color: theme.colors.secondaryContent };

  return (
    <Container>
      <View style={styles.container}>
        <View style={[styles.contentWrapper, getCallToActionContentStyle(variant)]}>
          <Text style={[styles.eyebrowText, eyebrowTextColorStyle, getCallToActionTextStyle(variant)]}>
            {eyebrowText}
          </Text>
          <Text style={[styles.title, getTextClass(titleStyle), textColorStyle, getCallToActionTextStyle(variant)]}>
            {title}
          </Text>
          <Text style={[styles.description, textColorStyle, getCallToActionTextStyle(variant)]}>{description}</Text>
        </View>
        <View style={[styles.buttonsWrapper, getCallToActionButtonsStyle(variant)]}>
          {primaryButtonCopy && <Button style={primaryButtonStyle} copy={primaryButtonCopy} />}
          {secondaryButtonCopy && <Button style={secondaryButtonStyle} copy={secondaryButtonCopy} />}
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 20,
  },
  contentWrapper: {
    justifyContent: 'center',
  },
  eyebrowText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: theme.colors.primary,
    paddingVertical: 20,
    width: '100%',
    textAlign: 'center',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
});
