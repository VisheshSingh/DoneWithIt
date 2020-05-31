import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ListItem from './ListItem';
import colors from '../config/colors';

const ListDetails = ({ title, subTitle, image }) => {
  return (
    <View>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <ListItem
        image={require('../../assets/mosh.jpg')}
        title='Mosh Hamedani'
        subTitle='5 listings'
      />
    </View>
  );
};

export default ListDetails;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: 250,
  },
  textContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
});
