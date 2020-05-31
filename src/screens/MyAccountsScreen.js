import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ListItem from '../components/ListItem';
import AppScreen from '../components/AppScreen';
import ListItemSeparator from '../components/ListItemSeparator';
import colors from '../config/colors';
import ListIcon from '../components/ListIcon';

const initialOptions = [
  {
    id: '1',
    title: 'My Listings',
    iconName: 'format-list-bulleted',
    color: colors.primary,
    size: 40,
  },
  {
    id: '2',
    title: 'My Messages',
    iconName: 'email',
    color: colors.secondary,
    size: 40,
  },
];

const MyAccountsScreen = () => {
  return (
    <AppScreen>
      <ListItem
        image={require('../../assets/mosh.jpg')}
        title='Mosh Hamedani'
        subTitle='programming@codewithmosh.com'
      />
      <View style={styles.listActions}>
        <FlatList
          data={initialOptions}
          keyExtractor={(option) => option.id}
          renderItem={({ item }) => (
            <ListIcon
              iconName={item.iconName}
              bgColor={item.color}
              description={item.title}
              size={item.size}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListIcon iconName='logout' bgColor={colors.gold} description='Log Out' />
    </AppScreen>
  );
};

export default MyAccountsScreen;

const styles = StyleSheet.create({
  listActions: {
    marginVertical: 20,
  },
});
