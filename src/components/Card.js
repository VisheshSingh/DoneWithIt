import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import colors from '../config/colors';

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} resizeMode='cover' />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 5,
  },
  image: {
    height: 200,
    width: '100%',
  },
  title: {
    fontSize: 16,
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  textContainer: {
    padding: 15,
  },
});
