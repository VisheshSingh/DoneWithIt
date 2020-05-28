import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableNativeFeedback,
} from 'react-native';

export default function App() {
  const handlePress = () => console.log('Text pressed!');
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} onPress={handlePress} style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        consequuntur, at ipsa debitis praesentium culpa tempore hic vel? Aliquam
        quasi ullam, ducimus delectus voluptate illum dolore aut eveniet quaerat
        laborum beatae veritatis ipsam sunt excepturi sit odit dicta repellat
        voluptatibus maxime sint officia hic, error perspiciatis ad! Temporibus,
        dolore deleniti.
      </Text>
      <TouchableNativeFeedback onPress={() => console.log('Tapped on image!')}>
        <View
          style={{ width: 200, height: 70, backgroundColor: 'dodgerblue' }}
        ></View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
