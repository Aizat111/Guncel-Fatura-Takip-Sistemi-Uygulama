import {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL} from '../pages/Services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = (tc, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/auth/login`, {
        tc,
        password,
      })
      .then(res => {
        setUserInfo(res?.data.data);
        setUserToken(res?.data?.data.token);
        AsyncStorage.setItem('userToken', res?.data.data.token);
        AsyncStorage.setItem('userInfo', res?.data.data);
      });
      setIsLoading(false)
  };

  const logout = () => {
    setUserToken(null);
    setIsLoading(true);
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('userItem');
    setIsLoading(false)
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');
      let userToken = await AsyncStorage.getItem('userToken');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(userInfo);
      }
      setIsLoading(false);
    } catch (e) {
      console.log('Error');
    }
  };

  useEffect(()=>{
    isLoggedIn();
  },[])

  return (
    <AuthContext.Provider
      value={{login, logout, isLoading, userToken, userInfo}}>
      {children}
    </AuthContext.Provider>
  );
};
