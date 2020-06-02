import React, { useState } from 'react';
import { View, StyleSheet, YellowBox, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Welcome from './src/screens/Welcome';
import ViewImageScreen from './src/screens/ViewImageScreen';
import Card from './src/components/Card';
import colors from './src/config/colors';
import ListDetails from './src/components/ListDetails';
import MessagesScreen from './src/screens/MessagesScreen';
import MyAccountsScreen from './src/screens/MyAccountsScreen';
import ListingsScreen from './src/screens/ListingsScreen';
import AppTextInput from './src/components/AppTextInput';
import AppScreen from './src/components/AppScreen';
import AppPicker from './src/components/AppPicker';

YellowBox.ignoreWarnings(['Remote debugger']);

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'garage', value: 3 },
];

export default function App() {
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState();
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
      <AppScreen>
        <Switch
          value={isNew}
          onValueChange={(newValue) => setIsNew(newValue)}
        />
        {isNew && (
          <AppPicker
            selectedItem={category}
            onSelectItem={(newItem) => setCategory(newItem)}
            items={categories}
            icon='apps'
            placeholder='Category'
          />
        )}
        {isNew && <AppTextInput icon='email' placeholder='Email' />}
      </AppScreen>
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
