import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../styles/Colors';

const Profile = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.header}>Profile Page</Text>
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

export default Profile;
