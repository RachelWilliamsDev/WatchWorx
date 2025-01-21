import {useRoute} from '@react-navigation/native';
import React, {useMemo, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import Carousel from '../components/Carousel/Carousel';
import Header from '../components/Header/Header';
import ProductColors from '../components/ProductColors/ProductColors';
import ProductDescription from '../components/ProductDescription/ProductDescription';
import ProductDetail from '../components/ProductDetails/ProductDetail';
import ProductReviews from '../components/ProductReviews/ProductReviews';
import ProductTabSelector from '../components/ProductTabSelector/ProductTabSelector';

import {spacing} from '../constants/dimensions';

const TABS = ['Description', 'Reviews'];

const ProductDetailScreen = () => {
  const route = useRoute();
  const {name, brand, images, details, review} = route.params;

  const [activeTab, setActiveTab] = useState('Description');

  const ActiveTabContent = useMemo(() => {
    return activeTab === 'Description' ? (
      <ProductDescription details={details} />
    ) : (
      <ProductReviews review={review} />
    );
  }, [activeTab, details, review]);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <Carousel images={images} />
        <ProductDetail title={name} brand={brand} />
        <ProductColors />
        <ProductTabSelector
          tabs={TABS}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {ActiveTabContent}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    padding: spacing.md,
  },
});

export default ProductDetailScreen;
