import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const AppPicker = ({ icon, placeholder, ...otherProps }) => {
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
      <Text style={styles.textInput}>{placeholder}</Text>
      <MaterialCommunityIcons
        name='chevron-down'
        size={20}
        color={colors.medium}
      />
    </View>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 20,
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
    flex: 1,
  },
});
