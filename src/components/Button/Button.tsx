import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ButtonProps } from '.';
import { getButtonStyle, getButtoneTextStyle } from '@/utilities/styling';

export const Button: FC<ButtonProps> = ({ onPress, style, copy }) => {
  return (
    <TouchableOpacity style={[styles?.container, getButtonStyle(style)]} onPress={onPress}>
      <Text style={[styles.text, getButtoneTextStyle(style)]}>{copy}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
