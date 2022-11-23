import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useReducer, useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../actions/userActions';
import {API_URL} from '../constants/helper';

const useLogin = () => {
  const errors = [];
  const [alert, setAlert] = useState(false);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [userData, setUserData] = useReducer(
    (state, nextState) => ({...state, ...nextState}),
    {
      phone: '',
      password: '',
    },
  );

  const handleChange = (name, value) => setUserData({[name]: value});
  const loginUser = async () => {
    // fetch(`${API_URL}/login`, {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     phone: userData.phone.trim(),
    //     password: userData.password,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
    // return;

    try {
      console.log({API_URL});
      setLoading(true);
      const response = await axios.post(`${API_URL}/login`, {
        phone: userData.phone.trim(),
        password: userData.password,
      });
      setLoading(false);
      console.log({response: response.data});
      const {code, message} = response.data;
      if (code !== '00')
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: [`${message}`],
        });
      dispatch(login(message));
      return navigation.navigate('home');
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('data', error.response.data);
        console.log('status', error.response.status);
        console.log('headers', error.response.headers);
        //handle error
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('request', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log({error});
      setLoading(false);
      return setAlert({
        close: () => setAlert(false),
        title: 'Error',
        icon: 'error',
        confirmText: 'Ok',
        message: ['Internal Server error'],
      });
    }
  };
  return {
    userData,
    loading,
    handleChange,
    alert,
    loginUser,
  };
};

export default useLogin;
