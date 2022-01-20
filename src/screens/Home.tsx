import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import ApiServices from '../networks/ApiServices';
import AxiosServices from '../networks/AxiosService';
import {userSelector} from '../redux/user/user.selector';
import {Colors} from '../styles/Colors';

const Home = () => {
  const {username} = useSelector(userSelector);
  const [post, setPost] = useState([]);
  const getPost = () => {
    AxiosServices.get(ApiServices.POSTS)
      .then(res => {
        const data = res.data;
        setPost(data.posts);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getPost();
    return () => {
      setPost([]);
    };
  }, []);
  return (
    <View style={styles.body}>
      <Text>Hello {username}</Text>
      <Text style={styles.header}>Home Page</Text>
      <FlatList
        data={post}
        renderItem={({item}) => (
          <View>
            <Text>{[item]}</Text>
          </View>
        )}
        keyExtractor={item => item}
      />
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
