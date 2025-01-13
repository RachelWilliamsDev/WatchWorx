import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Category from '../components/Category/Category';
import SearchBar from '../components/SearchBar/SearchBar';
import {colors} from '../constants/colors';
import {fontSize, spacing} from '../constants/dimensions';
import {fontFamily} from '../constants/fonts';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Unwind the Perfect Watch</Text>
      <SearchBar />
      <Category />
    </SafeAreaView>
  );
};

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
  },
});

export default HomeScreen;
