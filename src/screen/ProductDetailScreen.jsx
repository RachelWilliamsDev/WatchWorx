import {useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Carousel from '../components/Carousel/Carousel';
import Header from '../components/Header/Header';
import {spacing} from '../constants/dimensions';

const ProductDetailScreen = () => {
  const route = useRoute();
  const {imageUrl, name, brand, price, images} = route.params;
  return (
    <View style={styles.container}>
      <Header />
      <Carousel images={images} />
    </View>
  );
};
export default ProductDetailScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: spacing.md,
  },
});
