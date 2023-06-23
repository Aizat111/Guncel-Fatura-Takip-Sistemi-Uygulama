import {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {saveUserToken,saveUserInfo,getUserInfo,getUserToken} from "../utils/AsyncStorage"
const LOGIN_URL = 'http://localhost:5001/auth/login'


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = (tc, password) => {
    setIsLoading(true);
    axios
      .post(LOGIN_URL, {
        tc,
        password,
      })
      .then(res => {

        setUserInfo(res.data.data);
        setUserToken(res.data.token);
        saveUserToken(res?.data.token)
        saveUserInfo(res?.data.data)
      });
      setIsLoading(false)
  };



  const logout = async () => {
    setUserToken(null);
    setIsLoading(true);
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('userItem');
    setIsLoading(false)
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = getUserInfo();
      let userToken =getUserToken();
      
      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(userInfo.data);
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
