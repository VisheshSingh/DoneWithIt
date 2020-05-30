import React from 'react';
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  console.log('Dimensions: ', Dimensions.get('screen'));
  const handlePress = () => console.log('Text pressed!');
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: 'dodgerblue', width: '50%', height: 150 }}
      >
        {/* <Text>DoneWithIt</Text> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
