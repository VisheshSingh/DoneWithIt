import React from 'react';
import { View, StyleSheet, YellowBox } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Welcome from './src/screens/Welcome';
import ViewImageScreen from './src/screens/ViewImageScreen';
import Card from './src/components/Card';
import colors from './src/config/colors';
import ListDetails from './src/components/ListDetails';
import MessagesScreen from './src/screens/MessagesScreen';
import MyAccountsScreen from './src/screens/MyAccountsScreen';
import ListingsScreen from './src/screens/ListingsScreen';

YellowBox.ignoreWarnings(['Remote debugger']);

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Card
        title='Red jacket for sale!'
        subTitle='$100'
        image={require('./assets/jacket.jpg')}
      /> */}
      {/* <ListDetails
        title='Red jacket for sale'
        subTitle='$100'
        image={require('./assets/jacket.jpg')}
      /> */}
      <ListingsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    // paddingTop: 100,
    backgroundColor: colors.light,
  },
});
