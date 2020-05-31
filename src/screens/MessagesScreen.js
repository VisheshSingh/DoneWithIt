import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../components/ListItem';

import AppScreen from '../components/AppScreen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
  {
    id: '1',
    title: 'T1',
    description: 'D1',
    image: require('../../assets/mosh.jpg'),
  },
  {
    id: '2',
    title: 'T2',
    description: 'D2',
    image: require('../../assets/mosh.jpg'),
  },
];
const MessagesScreen = (props) => {
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };
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
            onPress={() => console.log('List item: ', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </AppScreen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
