import React, {useRef, useState} from 'react';
import {Dimensions, View} from 'react-native';
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

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollX.value = e.contentOffset.x;
    },
  });

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (
      viewableItems[0]?.index !== undefined &&
      viewableItems[0]?.index !== null
    ) {
      setPaginationIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 50,
      },
      onViewableItemsChanged,
    },
  ]);

  return (
    <View>
      <Animated.FlatList
        data={images}
        renderItem={({item, index}) => (
          <CarouselItem item={item} index={index} scrollX={scrollX} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        keyExtractor={(item, index) => `${item}-${index}`}
        snapToInterval={width}
        snapToAlignment={'center'}
        decelerationRate="fast"
        contentContainerStyle={{
          alignItems: 'center',
        }}
        removeClippedSubviews={false}
      />
      <Pagination items={images} scrollX={scrollX} index={paginationIndex} />
    </View>
  );
};

export default Carousel;
