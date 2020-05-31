import React from 'react';
import { View, StyleSheet, YellowBox } from 'react-native';
import Welcome from './src/screens/Welcome';
import ViewImageScreen from './src/screens/ViewImageScreen';
YellowBox.ignoreWarnings(['Remote debugger']);

export default function App() {
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
