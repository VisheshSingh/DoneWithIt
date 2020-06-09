import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListIcon from './ListIcon';

const CategoryPickerItem = ({ item, onPress }) => {
  console.log(item);
  return (
    <View style={styles.container}>
      <ListIcon bgColor={item.bgColor} iconName={item.icon} size={80} />
      <Text style={styles.labelText}>{item.label}</Text>
    </View>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '33%',
  },
  labelText: {
    textAlign: 'center',
  },
});
