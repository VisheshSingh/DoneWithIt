import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableHighlight,
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
      <TouchableHighlight onPress={() => console.log('Tapped on image!')}>
        <Image
          fadeDuration={500}
          source={{
            width: 200,
            height: 300,
            uri: `https://picsum.photos/200/300`,
          }}
        />
      </TouchableHighlight>
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
