import React, { FC, useCallback, useMemo, useRef, useState } from 'react';
import { View, StyleSheet, Text, Dimensions, LayoutChangeEvent } from 'react-native';
import { UniformSlot, UniformSlotWrapperComponentProps } from '@uniformdev/canvas-react';
import Carousel from 'react-native-reanimated-carousel';
import theme from '@/theme';
import { getTextClass } from '@/utilities/styling';
import Container from '@/components/Container';
import { CardBlockProps } from '.';
import { getColorStyle } from './helpers';
import Button from '@/components/Button';

const width = Dimensions.get('window').width;

export const CardBlockCarousel: FC<CardBlockProps> = ({
  title,
  titleStyle,
  description,
  textColorVariant,
  buttonCopy,
  buttonStyle,
}) => {
  const [itemsHeight, setItemsHeight] = useState<number[]>([]);

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout;

    setItemsHeight(prev => [...prev, height]);
  }, []);

  const maxItemHeight = useMemo(() => Math.max(...itemsHeight, 0), [itemsHeight]);

  const carouselInner = useCallback(
    ({ items }: UniformSlotWrapperComponentProps) => (
      <Carousel
        data={Array(items.length).fill(0)}
        renderItem={({ index }) => <View onLayout={onLayout}>{items[index]}</View>}
        width={width - 40}
        height={maxItemHeight}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 40,
        }}
      />
    ),
    [maxItemHeight, onLayout]
  );

  const textColor = getColorStyle(textColorVariant);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={[styles.title, getTextClass(titleStyle), textColor]}>{title}</Text>
          <Text style={[styles.description, textColor]}>{description}</Text>
          {buttonCopy && <Button style={buttonStyle} copy={buttonCopy} />}
        </View>
      </View>
      <UniformSlot name="cardBlockInner" wrapperComponent={carouselInner} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 25,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 9,
    flexWrap: 'wrap',
    flex: 1,
  },
  contentContainer: {
    width: '100%',
    gap: 15,
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
