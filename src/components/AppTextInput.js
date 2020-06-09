import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const AppTextInput = ({ icon, width = '100%', ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.iconRight}
        />
      )}
      <TextInput
        style={styles.textInput}
        {...otherProps}
        placeholderTextColor={colors.grey}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // marginVertical: 8,
    borderRadius: 50,
    padding: 15,
    backgroundColor: colors.light2,
    alignItems: 'center',
  },
  iconRight: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 18,
    color: colors.dark,
  },
});
