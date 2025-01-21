import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../constants/colors';
import {fontSize, spacing} from '../../constants/dimensions';
import {fontFamily} from '../../constants/fonts';

const colorsData = [
  {colorName: 'Blue', colorValue: '#3CBFE3'},
  {colorName: 'Red', colorValue: '#E33C4C'},
  {colorName: 'Black', colorValue: '#000'},
];

const ItemSeparator = () => <View style={styles.itemSeparator} />;

const ProductColors = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const renderColorItem = ({item}) => {
    const {colorName, colorValue} = item;
    const isSelected = colorValue === selectedColor;

    return (
      <TouchableOpacity
        style={[
          styles.selectColorContainer,
          isSelected && {borderColor: colors.green},
        ]}
        accessible
        accessibilityRole="button"
        accessibilityLabel={`Select color ${colorName}`}
        accessibilityState={{selected: isSelected}}
        onPress={() => setSelectedColor(colorValue)}>
        <View
          style={[
            styles.circleColor,
            {
              backgroundColor: colorValue,
              opacity: isSelected ? 1 : 0.4,
            },
          ]}
          accessible
          accessibilityLabel={`Color preview: ${colorName}`}
        />
        <Text
          style={[styles.colorText, !isSelected && {color: colors.lightGray}]}
          accessibilityLabel={`Color name: ${colorName}`}>
          {colorName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.colorHeading}
        accessible
        accessibilityRole="header"
        accessibilityLabel="Available colors">
        Colors
      </Text>
      <FlatList
        data={colorsData}
        renderItem={renderColorItem}
        keyExtractor={item => item.colorName}
        horizontal
        ItemSeparatorComponent={ItemSeparator}
        showsHorizontalScrollIndicator={false}
        accessible
        accessibilityLabel="List of available colors"
      />
    </View>
  );
};

export default ProductColors;

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.md,
  },
  colorHeading: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.semiBold,
    color: colors.black,
    paddingBottom: spacing.md,
  },
  selectColorContainer: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 4,
    padding: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleColor: {
    height: spacing.md,
    width: spacing.md,
    borderRadius: spacing.md / 2,
  },
  colorText: {
    fontSize: fontSize.sm,
    fontFamily: fontFamily.medium,
    color: colors.black,
    marginLeft: spacing.sm,
  },
  itemSeparator: {
    width: spacing.sm,
  },
});
