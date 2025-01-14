import React from 'react';
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

const imageUrl =
  'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1725993269/Croma%20Assets/Communication/Wearable%20Devices/Images/309297_0_bjgmau.png';

const ProductCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.imageUrl}} style={styles.productImage} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentName}>{item.name}</Text>
        <Text style={styles.contentBrand}>{item.brand}</Text>
        <Text style={styles.contentPrice}>£{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ProductCard;
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
