import {StarIcon} from 'lucide-react-native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/colors';
import {fontSize, iconSize, spacing} from '../../constants/dimensions';
import {fontFamily} from '../../constants/fonts';

const ProductDetail = ({title, brand}) => {
  return (
    <View style={styles.container}>
      {/* Product Title and Brand */}
      <View style={styles.infoWrapper}>
        <Text
          style={styles.title}
          accessible
          accessibilityRole="header"
          accessibilityLabel={`Product title: ${title}`}>
          {title}
        </Text>
        <Text
          style={styles.brand}
          accessible
          accessibilityLabel={`Brand: ${brand}`}>
          {brand}
        </Text>
      </View>

      {/* Rating Section */}
      <View
        style={styles.ratingWrapper}
        accessible
        accessibilityRole="button"
        accessibilityLabel="Rating: 4.5 out of 5 stars">
        <StarIcon
          size={iconSize.sm}
          color={colors.yellow}
          fill={colors.yellow}
          accessibilityLabel="Star icon"
        />
        <Text style={styles.rating}>4.5</Text>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
  },
  infoWrapper: {
    flex: 1,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.lg,
    color: colors.black,
  },
  brand: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.sm,
    color: colors.green,
    marginTop: spacing.xs,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGreen,
    borderRadius: spacing.md,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  rating: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    color: colors.gray,
    marginLeft: spacing.xs,
  },
});
