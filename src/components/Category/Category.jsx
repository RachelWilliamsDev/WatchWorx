import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../constants/colors';
import {fontSize, spacing} from '../../constants/dimensions';
import {fontFamily} from '../../constants/fonts';
import {category} from '../../data/category';

const CategoryItem = ({item, selectedCategory, onSelect}) => (
  <TouchableOpacity
    onPress={() => onSelect(item.name)}
    accessibilityLabel={`Select ${item.name} category`}
    accessibilityState={{selected: selectedCategory === item.name}}>
    <Text
      style={[
        styles.categoryText,
        selectedCategory === item.name && styles.selectedCategoryText,
      ]}>
      {item.name}
    </Text>
    {selectedCategory === item.name && <View style={styles.underline} />}
  </TouchableOpacity>
);

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    category?.[0]?.name || '',
  );

  const handleSelectedCategory = useCallback(name => {
    setSelectedCategory(name);
  }, []);

  const renderItem = ({item}) => (
    <CategoryItem
      item={item}
      selectedCategory={selectedCategory}
      onSelect={handleSelectedCategory}
    />
  );

  const itemSeparator = useMemo(() => <View style={styles.separator} />, []);

  return (
    <FlatList
      data={category}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      horizontal
      ItemSeparatorComponent={itemSeparator}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.semiBold,
    color: colors.gray,
  },
  selectedCategoryText: {
    color: colors.green,
  },
  underline: {
    borderBottomColor: colors.green,
    borderBottomWidth: 2,
    width: '70%',
    marginTop: spacing.sm,
  },
  separator: {
    paddingHorizontal: spacing.sm,
  },
});
