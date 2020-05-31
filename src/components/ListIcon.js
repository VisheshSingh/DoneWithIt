import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const ListIcon = ({ iconName, description, bgColor }) => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: bgColor, borderRadius: 50 }}>
        <MaterialCommunityIcons
          name={iconName}
          size={30}
          color='white'
          style={styles.icon}
        />
      </View>
      <Text style={{ marginHorizontal: 8 }}>{description}</Text>
    </View>
  );
};

export default ListIcon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  icon: {
    padding: 10,
  },
});
