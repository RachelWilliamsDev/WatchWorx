import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/colors';
import {fontSize, spacing} from '../../constants/dimensions';
import {fontFamily} from '../../constants/fonts';

const ProductReviews = ({review}) => {
  if (!review) {
    return (
      <View
        style={styles.container}
        accessible
        accessibilityLabel="No reviews available">
        <Text style={styles.noReviewText}>No reviews available.</Text>
      </View>
    );
  }

  return (
    <View
      style={styles.container}
      accessible
      accessibilityLabel="Customer review">
      <Text style={styles.reviewText}>{review}</Text>
    </View>
  );
};

export default ProductReviews;

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.md,
  },
  noReviewText: {
    color: colors.gray,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    textAlign: 'center',
  },
  reviewText: {
    color: colors.gray,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
  },
});
