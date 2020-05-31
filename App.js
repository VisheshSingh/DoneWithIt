import React from 'react';
import { View, StyleSheet, YellowBox } from 'react-native';
import Welcome from './src/screens/Welcome';
import ViewImageScreen from './src/screens/ViewImageScreen';
YellowBox.ignoreWarnings(['Remote debugger']);

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: 'royalblue',
          borderRadius: 50,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
