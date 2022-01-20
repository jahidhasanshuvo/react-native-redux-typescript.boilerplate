import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {Screens} from '../navigation/Screens';
import {useAppDispatch} from '../redux/store';
import {setUsername as setUsernameInput} from '../redux/user/user.slice';
import {Colors} from '../styles/Colors';
import AxiosServices from '../networks/AxiosService';
import ApiServices from '../networks/ApiServices';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}: NativeStackHeaderProps) => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  return (
    <View style={styles.body}>
      <TextInput
        style={styles.textInput}
        value={username}
        placeholder="username"
        onChangeText={text => {
          setUsername(text);
        }}
      />
      <Text style={styles.error}>{error}</Text>
      <TextInput
        secureTextEntry
        textContentType="password"
        style={styles.textInput}
        value={password}
        placeholder="passwords"
        onChangeText={text => {
          setPassword(text);
        }}
      />
      <Text style={styles.error}>{error}</Text>
      <Pressable
        style={styles.button}
        android_ripple={{color: Colors.background}}
        onPress={() => {
          if (username.length < 0) {
            setError('*Type at least 5 character');
          } else {
            AxiosServices.postWithoutToken(ApiServices.LOGIN, {
              username: username,
              password: password,
            })
              .then(res => {
                const data = res.data;
                dispatch(setUsernameInput(username));
                AsyncStorage.setItem('accessToken', data.access_token);
                AsyncStorage.setItem('refreshToken', data.refresh_token);
                navigation.navigate(Screens.BottomTab);
                navigation.reset({
                  index: 0,
                  routes: [{name: Screens.BottomTab}],
                });
              })
              .catch(err => {
                console.log(err);
                setError('Wrong Username or password');
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
