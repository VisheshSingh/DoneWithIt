import React from 'react';
import { View, StyleSheet, YellowBox } from 'react-native';
import Welcome from './src/screens/Welcome';
YellowBox.ignoreWarnings(['Remote debugger']);

export default function App() {
  return <Welcome />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
