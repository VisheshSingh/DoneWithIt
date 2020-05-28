import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handlePress = () => console.log('Text pressed!');
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} onPress={handlePress}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        consequuntur, at ipsa debitis praesentium culpa tempore hic vel? Aliquam
        quasi ullam, ducimus delectus voluptate illum dolore aut eveniet quaerat
        laborum beatae veritatis ipsam sunt excepturi sit odit dicta repellat
        voluptatibus maxime sint officia hic, error perspiciatis ad! Temporibus,
        dolore deleniti.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
