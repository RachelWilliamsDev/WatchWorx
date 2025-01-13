import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../constants/colors';
import {fontSize, spacing} from '../../constants/dimensions';
import {fontFamily} from '../../constants/fonts';
import {category} from '../../data/category';

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(category[0].name);
  const handleSelectedCategory = name => {
    setSelectedCategory(name);
  };

  return (
    <FlatList
      data={category}
      renderItem={({item, index}) => (
        <TouchableOpacity onPress={() => handleSelectedCategory(item.name)}>
          <Text
            style={[
              styles.categoryText,
              selectedCategory === item.name && {
                color: colors.green,
              },
            ]}>
            {item.name}
          </Text>
          {selectedCategory === item.name && <View style={styles.underline} />}
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
      horizontal
      ItemSeparatorComponent={<View style={styles.separator} />}
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
