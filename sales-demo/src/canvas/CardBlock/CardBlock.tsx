import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { UniformSlot } from '@uniformdev/canvas-react';
import theme from '@/theme';
import { getTextClass } from '@/utilities/styling';
import Container from '@/components/Container';
import { CardBlockProps } from '.';
import { getColorStyle } from './helpers';
import Button from '@/components/Button';

export const CardBlock: FC<CardBlockProps> = ({
  title,
  titleStyle,
  description,
  buttonCopy,
  buttonStyle,
  textColorVariant,
}) => {
  const textColor = getColorStyle(textColorVariant);

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={[styles.title, getTextClass(titleStyle), textColor]}>{title}</Text>
          <Text style={[styles.description, textColor]}>{description}</Text>
          {buttonCopy && <Button style={buttonStyle} copy={buttonCopy} />}
        </View>
      </View>
      <UniformSlot name="cardBlockInner" />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 9,
    flexWrap: 'wrap',
    flex: 1,
  },
  contentContainer: {
    width: '100%',
    gap: 9,
  },
  title: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  description: {
    color: theme.colors.primary,
    textAlign: 'center',
  },
});
