import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.header}>Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'steelblue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default Home;
