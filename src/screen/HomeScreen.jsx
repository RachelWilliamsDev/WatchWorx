import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import Category from '../components/Category/Category';
import ProductCard from '../components/ProductCard/ProductCard';
import SearchBar from '../components/SearchBar/SearchBar';
import {colors} from '../constants/colors';
import {fontSize, spacing} from '../constants/dimensions';
import {fontFamily} from '../constants/fonts';
import {smartWatch} from '../data/smartwatch';

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <FlatList
      ListHeaderComponent={
        <>
          <Text style={styles.heading}>Unwind the Perfect Watch</Text>
          <SearchBar />
          <Category />
        </>
      }
      data={smartWatch}
      renderItem={({item, index}) => <ProductCard item={item} />}
      numColumns={2}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      contentContainerStyle={{
        paddingBottom: 50,
        padding: spacing.md,
      }}
      showsVerticalScrollIndicator={false}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  heading: {
    fontSize: fontSize.xxl,
    color: colors.black,
    fontFamily: fontFamily.bold,
    marginVertical: spacing.lg,
  },
});

export default HomeScreen;
