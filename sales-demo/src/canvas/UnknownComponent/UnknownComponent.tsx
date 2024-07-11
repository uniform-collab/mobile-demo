import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Props } from '.';

export const UnknownComponent: FC<Props> = ({ component }) => (
  <Text style={styles.unknown}>[unknown component: {component.type}]</Text>
);

const styles = StyleSheet.create({
  unknown: {
    borderColor: 'grey',
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: 'grey',
    color: 'grey',
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  icon: {
    marginRight: 4,
  },
});
