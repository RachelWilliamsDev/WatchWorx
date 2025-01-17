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
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.2, 0, width * 0.2],
            Extrapolation.CLAMP,
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[styles.imageWrapper, animatedStyle]}
      accessible={true}
      accessibilityLabel={`Carousel item ${index + 1}`}>
      <Image
        source={{uri: item}}
        style={styles.image}
        accessibilityRole="image"
        accessibilityLabel={`Image ${index + 1}`}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  image: {
    height: 300,
    width: width * 0.8,
    resizeMode: 'cover',
    borderRadius: 12,
    backgroundColor: colors.green,
  },
});

export default CarouselItem;
