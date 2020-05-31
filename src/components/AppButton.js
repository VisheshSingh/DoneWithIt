import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

const AppButton = ({ btnText, color, propStyle }) => {
  return (
    <View style={{ backgroundColor: color, ...styles.btnStyles, ...propStyle }}>
      <Text style={styles.btnText}>{btnText}</Text>
    </View>
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
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default AppButton;
