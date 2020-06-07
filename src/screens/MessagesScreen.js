import React, { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from 'react-native';
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

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

const MessagesScreen = (props) => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
