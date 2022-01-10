import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {Screens} from '../navigation/Screens';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../redux/store';
import {userSelector} from '../redux/user/user.selector';
import {editUsername} from '../redux/user/user.slice';
import {Colors} from '../styles/Colors';

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
        android_ripple={{color: Colors.background}}
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
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.white,
    color: Colors.black,
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
  },
  textInput: {
    borderColor: 'transparent',
    borderBottomColor: Colors.resolutionBlue,
    borderWidth: 1,
    width: '80%',
    fontSize: 20,
    marginBottom: 10,
    paddingBottom: 5,
    textAlign: 'center',
  },
  error: {
    color: Colors.red,
    marginBottom: 10,
  },
});

export default Login;
