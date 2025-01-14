import React, {memo} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../constants/colors';
import {fontSize, spacing} from '../../constants/dimensions';
import {fontFamily} from '../../constants/fonts';

const ProductCard = ({item: {imageUrl, name, brand, price}}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      accessible
      accessibilityLabel={`View details for ${name}`}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: imageUrl}}
          style={styles.productImage}
          onError={e => console.error('Image failed to load', e)}
          accessibilityLabel={`${name} image`}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentName}>{name}</Text>
        <Text style={styles.contentBrand}>{brand}</Text>
        <Text style={styles.contentPrice}>£{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ProductCard);

const styles = StyleSheet.create({
  container: {
    width: '48%',
    backgroundColor: colors.background,
    borderRadius: 12,
    marginVertical: spacing.md,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  imageContainer: {
    borderRadius: 12,
    backgroundColor: colors.green,
    margin: spacing.sm,
    height: 120,
    overflow: 'hidden',
  },
  productImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  contentContainer: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
  },
  contentName: {
    color: colors.black,
    fontSize: fontSize.md,
    fontFamily: fontFamily.semiBold,
  },
  contentBrand: {
    color: colors.gray,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.medium,
    paddingVertical: spacing.xs,
  },
  contentPrice: {
    color: colors.green,
    fontSize: fontSize.md,
    fontFamily: fontFamily.medium,
  },
});
