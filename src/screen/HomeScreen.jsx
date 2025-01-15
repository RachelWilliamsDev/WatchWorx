import React, {memo, useCallback, useMemo, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Category from '../components/Category/Category';
import ProductCard from '../components/ProductCard/ProductCard';
import SearchBar from '../components/SearchBar/SearchBar';
import {colors} from '../constants/colors';
import {fontSize, spacing} from '../constants/dimensions';
import {fontFamily} from '../constants/fonts';
import {category} from '../data/category';
import {headphones} from '../data/headphones';
import {smartWatch} from '../data/smartwatch';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    category?.[0]?.name || '',
  );

  const data = useMemo(() => {
    if (selectedCategory === 'Smart Watch') {
      return smartWatch;
    } else if (selectedCategory === 'Headphones') {
      return headphones;
    } else {
      const lowerCaseCategory = selectedCategory.toLowerCase();
      return [
        ...smartWatch.filter(item =>
          item.brand.toLowerCase().includes(lowerCaseCategory),
        ),
        ...headphones.filter(item =>
          item.brand.toLowerCase().includes(lowerCaseCategory),
        ),
      ];
    }
  }, [selectedCategory]);

  const handleUpdateCategory = useCallback(newCategory => {
    setSelectedCategory(newCategory);
  }, []);

  const renderHeader = () => (
    <>
      <Text
        style={styles.heading}
        accessibilityRole="header"
        accessible
        accessibilityLabel="Unwind the Perfect Watch. Heading.">
        Unwind the Perfect Watch
      </Text>
      <SearchBar accessibilityLabel="Search bar for products" />
      <Category
        selectedCategory={selectedCategory}
        handleUpdateCategory={handleUpdateCategory}
        accessibilityLabel={`Product category selection. Currently selected: ${selectedCategory}`}
      />
    </>
  );

  const renderProductCard = useCallback(
    ({item}) => (
      <ProductCard
        item={item}
        accessible
        accessibilityLabel={`Product: ${item.name}, Price: ${item.price}`}
      />
    ),
    [],
  );

  const renderEmptyComponent = useCallback(
    () => (
      <View
        style={styles.emptyContainer}
        accessible
        accessibilityRole="alert"
        accessibilityLabel="No products available. Alert.">
        <Text style={styles.emptyText}>No products available</Text>
      </View>
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={data}
        renderItem={renderProductCard}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyComponent}
        accessible
        accessibilityRole="list"
        accessibilityLabel="Product list. Browse products by category."
      />
    </SafeAreaView>
  );
};

export default memo(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  heading: {
    fontSize: fontSize.xxl,
    color: colors.black,
    fontFamily: fontFamily.bold,
    marginVertical: spacing.lg,
    paddingHorizontal: spacing.md,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  contentContainer: {
    paddingBottom: 50,
    paddingHorizontal: spacing.md,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  emptyText: {
    fontSize: fontSize.md,
    color: colors.gray,
    fontFamily: fontFamily.medium,
  },
});
