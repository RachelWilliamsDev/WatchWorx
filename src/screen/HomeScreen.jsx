import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/colors';
import {fontSize, spacing} from '../constants/dimentions';
import {fontFamily} from '../constants/fonts';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Unwind the Perfect Watch</Text>
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: spacing.md,
  },
  heading: {
    fontSize: fontSize.xxl,
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
});
