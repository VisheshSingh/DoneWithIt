import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.textInput}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  textInput: {
    padding: 20,
  },
});
