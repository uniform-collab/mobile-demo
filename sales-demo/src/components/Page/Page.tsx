import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { UniformComposition, UniformSlot } from '@uniformdev/canvas-react';
import { resolveRenderer } from '@/canvas';
import { useFetchContext } from '@/context/FetchContextProvider';
import theme from '@/theme';
import LoadingIndicator from '../LoadingIndicator';

export const Page = () => {
  const { composition } = useFetchContext();

  return (
    <>
      {composition === null ? (
        <View style={styles.loadingContainer}>
          <LoadingIndicator />
        </View>
      ) : (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <UniformComposition data={composition} resolveRenderer={resolveRenderer} behaviorTracking="onLoad">
              <UniformSlot name="pageContent" />
            </UniformComposition>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primaryContent,
    flex: 1,
  },
  loadingContainer: {
    backgroundColor: theme.colors.primaryContent,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
