import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Profile = () => {
  return (
    <View>
      <Text style={styles.header}>Profile Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 'bold',
  },
});

export default Profile;
