import {useNavigation} from '@react-navigation/native';
import {ArrowLeftIcon, HeartIcon} from 'lucide-react-native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {iconSize, spacing} from '../../constants/dimensions';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        accessible
        accessibilityLabel="Go back">
        <ArrowLeftIcon size={iconSize.md} />
      </TouchableOpacity>
      <TouchableOpacity accessible accessibilityLabel="Add to favorites">
        <HeartIcon size={iconSize.md} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
  },
});
