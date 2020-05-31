import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

const AppScreen = ({ children }) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default AppScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
