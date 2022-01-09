import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {Screens} from './Screens';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../redux/store';
import {userSelector} from '../redux/user/user.selector';
import {editUsername} from '../redux/user/user.slice';

const Login = ({navigation}: NativeStackHeaderProps) => {
  const dispatch = useAppDispatch();
  const {username} = useSelector(userSelector);
  const [input, setInput] = useState(username);
  const [error, setError] = useState('');
  return (
    <View style={styles.body}>
      <TextInput
        style={styles.textInput}
        value={input}
        placeholder="Type your name"
        onChangeText={text => {
          setInput(text);
        }}
      />
      <Text style={styles.error}>{error}</Text>
      <Pressable
        style={styles.button}
        android_ripple={{color: '#009999'}}
        onPress={() => {
          if (input.length < 5) {
            setError('*Type at least 5 character');
          } else {
            dispatch(editUsername(input));
            navigation.navigate(Screens.BottomTab);
            navigation.reset({
              index: 0,
              routes: [{name: Screens.BottomTab}],
            });
          }
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
  textInput: {
    borderColor: 'transparent',
    borderBottomColor: '#003980',
    borderWidth: 1,
    width: '80%',
    fontSize: 20,
    marginBottom: 10,
    paddingBottom: 5,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
