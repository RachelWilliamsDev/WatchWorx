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

import {ShoppingCartIcon} from 'lucide-react-native';
import CardButton from '../components/CardButton/CardButton';
import {colors} from '../constants/colors';
import {iconSize, spacing} from '../constants/dimensions';

const TABS = ['Description', 'Reviews'];

const ProductDetailScreen = () => {
  const route = useRoute();
  const {name, brand, images, details, review, price} = route.params;

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
      <Carousel images={images} />
      <ScrollView style={styles.scrollView}>
        <ProductDetail title={name} brand={brand} />
        <ProductColors />
        <ProductTabSelector
          tabs={TABS}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {ActiveTabContent}
      </ScrollView>
      <CardButton
        price={price}
        icon={<ShoppingCartIcon color={colors.background} size={iconSize.md} />}
        text={`Add to Cart £${price}`}
      />
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
