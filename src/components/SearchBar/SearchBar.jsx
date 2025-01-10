import {LayoutGridIcon, SearchIcon} from 'lucide-react-native';
import React, {memo} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../../constants/colors';
import {fontSize, iconSize, spacing} from '../../constants/dimensions';
import {fontFamily} from '../../constants/fonts';

const SearchBar = memo(() => (
  <View style={styles.mainInputContainer}>
    <View style={styles.inputWrapper}>
      <SearchIcon size={iconSize.md} color={colors.black} />
      <TextInput
        style={styles.textInput}
        placeholder="Search for Products"
        placeholderTextColor={colors.lightGray}
        accessible
        accessibilityLabel="Search for products"
      />
    </View>
    <View style={styles.categoryContainer}>
      <LayoutGridIcon size={iconSize.md} color={colors.black} />
    </View>
  </View>
));

const styles = StyleSheet.create({
  mainInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.lg,
    backgroundColor: colors.lightGrey,
    padding: spacing.sm,
    borderRadius: spacing.md,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: spacing.lg,
    paddingHorizontal: spacing.md,
  },
  textInput: {
    flex: 1,
    fontSize: fontSize.md,
    fontFamily: fontFamily.medium,
    padding: spacing.md,
  },
  categoryContainer: {
    paddingLeft: spacing.sm,
  },
});

export default SearchBar;
