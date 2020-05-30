import React from 'react';
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Platform,
  StatusBar,
  YellowBox,
} from 'react-native';

import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';

YellowBox.ignoreWarnings(['Remote debugger']);

export default function App() {
  console.log(
    'Dimensions: ',
    useDimensions(),
    'Orientation: ',
    useDeviceOrientation()
  );

  const { landscape } = useDeviceOrientation();

  const handlePress = () => console.log('Text pressed!');
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: '100%',
          height: landscape ? '100%' : '30%',
        }}
      >
        {/* <Text>DoneWithIt</Text> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
