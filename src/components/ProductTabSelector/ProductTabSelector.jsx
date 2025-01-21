import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../constants/colors';
import {fontSize, spacing} from '../../constants/dimensions';
import {fontFamily} from '../../constants/fonts';

const ItemSeparator = () => <View style={styles.itemSeparator} />;

const ProductTabSelector = ({tabs, activeTab, setActiveTab}) => {
  const renderTabItem = ({item}) => (
    <TouchableOpacity
      onPress={() => setActiveTab(item)}
      style={styles.tabContainer}
      accessible
      accessibilityRole="button"
      accessibilityLabel={`Tab: ${item}`}
      accessibilityState={{selected: activeTab === item}}>
      <Text
        style={[
          styles.tabText,
          {color: activeTab === item ? colors.green : colors.gray},
        ]}>
        {item}
      </Text>
      {activeTab === item && <View style={styles.tabIndicator} />}
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={tabs}
      renderItem={renderTabItem}
      horizontal
      ItemSeparatorComponent={ItemSeparator}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      accessible
      accessibilityRole="tablist"
      accessibilityLabel="Product tab selector"
    />
  );
};

export default ProductTabSelector;

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.md,
  },
  tabContainer: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.medium,
  },
  itemSeparator: {
    width: spacing.lg,
  },
  tabIndicator: {
    width: '50%',
    borderBottomColor: colors.green,
    borderBottomWidth: 2,
    marginTop: spacing.xs,
  },
});
