import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableNativeFeedback,
  Button,
} from 'react-native';

export default function App() {
  const handlePress = () => console.log('Text pressed!');
  return (
    <SafeAreaView style={styles.container}>
      <Button color='orange' title='click me' onPress={handlePress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
