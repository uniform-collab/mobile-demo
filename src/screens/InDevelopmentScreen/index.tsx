import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { DevelopmentIcon } from '@/icons';
import theme from '@/theme';

export const InDevelopmentScreen = () => (
  <SafeAreaView style={styles.container}>
    <DevelopmentIcon width={75} height={75} fill={theme.colors.primary} />
    <Text style={styles.title}>Hello, this screen is currently under development. Please check back later.</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    gap: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
});
