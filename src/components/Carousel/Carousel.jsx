import React, {useCallback, useRef, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Pagination from '../Pagination/Pagination';
import CarouselItem from './CarouselItem';

const {width} = Dimensions.get('screen');

const Carousel = ({images}) => {
  const scrollX = useSharedValue(0);
  const [paginationIndex, setPaginationIndex] = useState(0);

  const handleScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const handleViewableItemsChanged = useCallback(({viewableItems}) => {
    const firstVisibleItem = viewableItems[0];
    if (
      firstVisibleItem?.index !== undefined &&
      firstVisibleItem?.index !== null
    ) {
      setPaginationIndex(firstVisibleItem.index);
    }
  }, []);

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {itemVisiblePercentThreshold: 50},
      onViewableItemsChanged: handleViewableItemsChanged,
    },
  ]);

  return (
    <View accessible={true} accessibilityRole="adjustable">
      <Animated.FlatList
        data={images}
        renderItem={({item, index}) => (
          <CarouselItem item={item} index={index} scrollX={scrollX} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        keyExtractor={(item, index) => `${item}-${index}`}
        snapToInterval={width}
        snapToAlignment="center"
        decelerationRate="fast"
        contentContainerStyle={styles.contentContainer}
        removeClippedSubviews={false}
        accessibilityRole="list"
        accessibilityHint="Swipe left or right to navigate through the carousel items"
      />
      <Pagination
        items={images}
        scrollX={scrollX}
        index={paginationIndex}
        accessibilityHint="Pagination indicators showing the current item in the carousel"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
  },
});

export default Carousel;
