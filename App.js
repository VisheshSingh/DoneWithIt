import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Alert,
  Button,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  const handlePress = () => console.log('Text pressed!');
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color='orange'
        title='click me'
        onPress={() =>
          Alert.alert('My title', 'My message', [
            { text: 'Yes', onPress: () => console.log('Yes') },
            { text: 'No', onPress: () => console.log('No') },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
