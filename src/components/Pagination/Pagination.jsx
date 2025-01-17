import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {colors} from '../../constants/colors';

const {width} = Dimensions.get('screen');

const Dot = ({index, scrollX, currentIndex}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const dotWidth = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [8, 20, 8],
      Extrapolation.CLAMP,
    );

    return {
      width: dotWidth,
    };
  });

  return (
    <Animated.View
      style={[
        styles.dot,
        animatedStyle,
        {backgroundColor: currentIndex === index ? colors.green : colors.gray},
      ]}
    />
  );
};

const Pagination = ({items, scrollX, index}) => {
  return (
    <View style={styles.container}>
      {items.map((_, i) => (
        <Dot key={i} index={i} scrollX={scrollX} currentIndex={index} />
      ))}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 8,
    marginHorizontal: 2,
    borderRadius: 8,
  },
});
