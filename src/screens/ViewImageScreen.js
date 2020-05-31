import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name='close' color='white' size={30} />
        <MaterialCommunityIcons
          name='trash-can-outline'
          color='white'
          size={30}
        />
      </View>

      <Image
        source={require('../../assets/chair.jpg')}
        style={styles.image}
        resizeMode='contain'
      ></Image>
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
