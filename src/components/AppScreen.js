import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Constants from 'expo-constants';
// console.log(Constants);
const AppScreen = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default AppScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});
