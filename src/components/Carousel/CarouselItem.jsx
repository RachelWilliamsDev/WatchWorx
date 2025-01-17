import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {colors} from '../../constants/colors';

const {width} = Dimensions.get('screen');

const CarouselItem = ({item, index, scrollX}) => {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.21, 0, width * 0.21],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.imageWrapper, rnAnimatedStyle]}>
      <Image source={{uri: item}} style={styles.image} />
    </Animated.View>
  );
};
export default CarouselItem;
const styles = StyleSheet.create({
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  image: {
    height: 300,
    width: 300,
    resizeMode: 'cover',
    borderRadius: 12,
    backgroundColor: colors.green,
  },
});
