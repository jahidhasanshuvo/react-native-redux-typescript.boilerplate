import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {userSelector} from '../redux/user/user.selector';
import {Colors} from '../styles/Colors';

const Home = () => {
  const {username} = useSelector(userSelector);
  return (
    <View style={styles.body}>
      <Text>Hello {username}</Text>
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
    color: Colors.black,
    fontWeight: 'bold',
  },
});

export default Home;
