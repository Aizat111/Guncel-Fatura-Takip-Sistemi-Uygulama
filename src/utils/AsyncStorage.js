import AsyncStorage from '@react-native-async-storage/async-storage';

// UserInfo'i kaydetme
export const saveUserInfo = async (data) => {
  try {
    await AsyncStorage.setItem('userInfo', JSON.stringify(data));
    console.log('UserInfo kaydedildi.');
  } catch (error) {
    console.log('UserInfo kaydetme hatası:', error);
  }
};

// UserToken'i kaydetme
export const saveUserToken = async (token) => {
  try {
    await AsyncStorage.setItem('userToken', token);
    console.log('UserToken kaydedildi.');
  } catch (error) {
    console.log('UserToken kaydetme hatası:', error);
  }
};

// UserInfo'i getirme
export const getUserInfo = async () => {
  try {
    const userInfoString = await AsyncStorage.getItem('userInfo');
    if (userInfoString !== null) {
      const userInfo = JSON.parse(userInfoString);
   
      return userInfo;
    } else {
      console.log('UserInfo bulunamadı.');
      return null;
    }
  } catch (error) {
    console.log('UserInfo alım hatası:', error);
    return null;
  }
};

// UserToken'i getirme
export const getUserToken = async () => {
  try {
    const userToken = await AsyncStorage.getItem('userToken');
    if (userToken !== null) {
   
      return userToken;
    } else {
      console.log('UserToken bulunamadı.');
      return null;
    }
  } catch (error) {
    console.log('UserToken alım hatası:', error);
    return null;
  }
};
