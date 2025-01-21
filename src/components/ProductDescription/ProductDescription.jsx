import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/colors';
import {fontSize, spacing} from '../../constants/dimensions';
import {fontFamily} from '../../constants/fonts';

const ProductDescription = ({details}) => {
  if (!Array.isArray(details) || details.length === 0) {
    return (
      <View
        style={styles.container}
        accessible={true}
        accessibilityRole="text"
        accessibilityLabel="No description available">
        <Text style={styles.noDescriptionText}>No description available.</Text>
      </View>
    );
  }

  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityLabel="Product description">
      {details.map((item, index) => (
        <View
          key={index}
          style={styles.item}
          accessible={true}
          accessibilityLabel={`Description item ${index + 1}`}>
          <Text
            style={styles.title}
            accessibilityRole="header"
            accessibilityLabel={`Title: ${item.title}`}>
            {item.title}
          </Text>
          <Text
            style={styles.description}
            accessibilityLabel={`Description: ${item.description}`}>
            {item.description}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.md,
  },
  item: {
    marginBottom: spacing.md,
  },
  title: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    color: colors.gray,
  },
  description: {
    color: colors.gray,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    marginTop: spacing.sm,
  },
  noDescriptionText: {
    color: colors.gray,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    textAlign: 'center',
  },
});
