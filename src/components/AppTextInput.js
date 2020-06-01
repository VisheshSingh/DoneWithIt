import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.iconRight}
        />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 20,
    borderRadius: 50,
    padding: 15,
    backgroundColor: colors.light2,
  },
  iconRight: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 18,
    color: colors.dark,
  },
});
