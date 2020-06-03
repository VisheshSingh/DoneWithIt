import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

const AppButton = ({ btnText, color = colors.primary, propStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: color, ...styles.btnStyles, ...propStyle }}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyles: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
  },
  btnText: {
    padding: 15,
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default AppButton;
