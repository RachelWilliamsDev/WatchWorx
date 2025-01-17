import {ArrowLeftIcon, HeartIcon} from 'lucide-react-native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {iconSize} from '../../constants/dimensions';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ArrowLeftIcon size={iconSize.md} />
      </TouchableOpacity>
      <TouchableOpacity>
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
  },
});
