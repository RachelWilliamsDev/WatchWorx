import React, {memo} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Category from '../components/Category/Category';
import ProductCard from '../components/ProductCard/ProductCard';
import SearchBar from '../components/SearchBar/SearchBar';
import {colors} from '../constants/colors';
import {fontSize, spacing} from '../constants/dimensions';
import {fontFamily} from '../constants/fonts';
import {smartWatch} from '../data/smartwatch';

const HomeScreen = () => {
  const renderHeader = () => (
    <>
      <Text style={styles.heading}>Unwind the Perfect Watch</Text>
      <SearchBar />
      <Category />
    </>
  );

  const renderProductCard = ({item}) => <ProductCard item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={smartWatch}
        renderItem={renderProductCard}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No products available</Text>
          </View>
        }
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
    marginTop: spacing.xxl,
  },
  emptyText: {
    fontSize: fontSize.md,
    color: colors.gray,
    fontFamily: fontFamily.medium,
  },
});
