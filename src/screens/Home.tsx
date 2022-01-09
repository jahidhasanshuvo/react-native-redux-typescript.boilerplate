import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {userSelector} from '../redux/user/user.selector';

const Home = () => {
  const {username} = useSelector(userSelector);
  return (
    <View style={styles.body}>
      <Text>Heeelo {username}</Text>
      <Text style={styles.header}>Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
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
