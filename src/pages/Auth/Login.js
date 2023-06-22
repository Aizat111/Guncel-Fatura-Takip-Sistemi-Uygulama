import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert
} from 'react-native';
import Background from '../../Background';
import {templateBlue} from '../../Constants';

import { AuthContext } from '../../context/AuthContext'


const Login = props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const {login} = React.useContext(AuthContext);
  const validate_user=()=>{
    if(users.filter((item)=> (item?.tc ===username && item?.password===password)).length>0){
      const user = users.filter((item)=> (item?.tc ===username && item?.password===password))[0]
      signIn(user);
    }   
    else
    Alert.alert('Uyarı','Yanlış kullanıcı')
  }


  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>
          Güncel Fatura Takip Sistemine Hoş Geldin!
        </Text>
        <View style={styles.new_user_container}>
          <Text style={styles.new_user_text}>Burada Yeni Misin? {''} </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
            <Text style={styles.signup_text}>Kayıt Ol!</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inner_container}>
          <View style={styles.input_container}>
            <Text style={styles.label}>TC Kimlik Numara</Text>
            <TextInput
              style={styles.input}
              placeholder="TC Kimlik Numara"
           
              onChangeText={(value)=>setUsername(value)}
            />
          </View>
          <View style={styles.input_container}>
            <Text style={styles.label}>Şifre</Text>
            <TextInput
              style={styles.input}
              placeholder="demo"
              autoComplete="password"
              secureTextEntry={true}
              onChangeText={(value)=>setPassword(value)}
            />
          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate('SendMail')}>
          <Text style={styles.forgot_password_text}>Forgot Password ?</Text>
          </TouchableOpacity>
          
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>{login(username, password)}}>
          <Text style={styles.button_text}>Devam</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height / 1.7,
    width: 350,
    borderRadius: 20,
    alignItems: 'center',

  },
  title: {
    width: Dimensions.get('window').width / 1.3,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60
  },
  inner_container: {
    marginTop: 50,
  },
  input_container: {
    marginTop: 15,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 3,
  },
  input: {
    padding: 10,
    backgroundColor: '#f8f6f2',
    width: Dimensions.get('window').width / 1.3,
    borderRadius: 10,
    textTransform: 'capitalize'
  },
  new_user_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  new_user_text: {
    color: 'gray',
    fontSize: 14,
  },
  signup_text: {
    fontSize: 14,
    fontSize: 14,
    fontWeight: 'bold',
    color: templateBlue,
  },
  forgot_password_text: {
    fontSize: 14,
    fontSize: 14,
    fontWeight: 'bold',
    color: templateBlue,
    textAlign: 'right',
    marginTop: 3,
  },
  button: {
    backgroundColor: templateBlue,
    borderRadius: 10,
    alignItems: 'center',
    width: Dimensions.get('window').width / 1.3,
    paddingVertical: 10,
    marginTop: 25
  },
  button_text: {color: 'white', fontSize: 15, fontWeight: 'bold'},
});
