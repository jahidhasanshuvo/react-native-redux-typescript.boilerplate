import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Login = ({navigation}: NativeStackHeaderProps) => {
  return (
    <View style={styles.body}>
      <Pressable
        style={styles.button}
        android_ripple={{color: '#009999'}}
        onPress={() => {
          navigation.navigate('Profile');
          navigation.reset({
            index: 0,
            routes: [{name: 'Profile'}],
          });
        }}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#009999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    color: '#00000',
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default Login;
