import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../components/ListItem';

import AppScreen from '../components/AppScreen';
import ListItemSeparator from '../components/ListItemSeparator';

const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../../assets/mosh.jpg'),
  },
];
const MessagesScreen = () => {
  return (
    <AppScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </AppScreen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
