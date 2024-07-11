import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export const LoadingIndicator = () => {
  return <LottieView source={require('./animation.json')} style={styles.container} autoPlay loop />;
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
  },
});
