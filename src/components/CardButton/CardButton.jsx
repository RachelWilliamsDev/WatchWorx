import React, {memo} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../constants/colors';
import {fontSize, spacing} from '../../constants/dimensions';
import {fontFamily} from '../../constants/fonts';

const CardButton = memo(({text, icon}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => console.log('Button pressed')}
        accessibilityRole="button"
        accessibilityLabel={text}
        accessibilityHint="Double-tap to add this item to your cart.">
        <LinearGradient
          colors={['#008071', '#009482', '#008071']}
          style={styles.linearGradient}>
          {icon}
          <Text style={styles.buttonText}>{text}</Text>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </View>
  );
});

export default CardButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.md,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    height: 50,
    width: '90%',
    flexDirection: 'row',
    paddingHorizontal: spacing.md,
  },
  buttonText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.bold,
    color: colors.background,
    marginLeft: spacing.sm,
  },
});
