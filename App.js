import React from 'react';
import { View, StyleSheet, YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'dodgerblue', flex: 2 }} />
      <View style={{ backgroundColor: 'gold', flex: 1 }} />
      <View style={{ backgroundColor: 'tomato', flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
