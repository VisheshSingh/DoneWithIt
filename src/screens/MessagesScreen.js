import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../components/ListItem';

import AppScreen from '../components/AppScreen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
  {
    id: '1',
    title:
      'This is going to be a very long title but will get limited to just one line',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur eum impedit, minima molestiae eligendi, itaque quidem molestias ipsam, necessitatibus iste harum reprehenderit qui saepe. Porro sapiente a similique rerum voluptatum?',
    image: require('../../assets/mosh.jpg'),
  },
  {
    id: '2',
    title: 'T2',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur eum impedit, minima molestiae eligendi, itaque quidem molestias ipsam, necessitatibus iste harum reprehenderit qui saepe. Porro sapiente a similique rerum voluptatum?',
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
            showChevrons
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
