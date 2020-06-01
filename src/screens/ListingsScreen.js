import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Card from '../components/Card';
import AppScreen from '../components/AppScreen';

const listings = [
  {
    id: '1',
    title: 'Red jacket for sale!',
    price: '$200',
    image: require('../../assets/jacket.jpg'),
  },
  {
    id: '2',
    title: 'Couch in a good condition',
    price: '$1000',
    image: require('../../assets/couch.jpg'),
  },
];
const ListingsScreen = () => {
  return (
    <AppScreen>
      <View style={styles.container}>
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id}
          renderItem={({ item }) => (
            <Card title={item.title} subTitle={item.price} image={item.image} />
          )}
        />
      </View>
    </AppScreen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
