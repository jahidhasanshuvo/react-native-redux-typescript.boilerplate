import {useAppDispatch} from '../redux/store';
import {setUsername as setUsernameInput} from '../redux/user/user.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logout = () => {
  const dispatch = useAppDispatch();
  dispatch(setUsernameInput(''));
  AsyncStorage.clear();
  return null;
};
export default Logout;
