import React from 'react';
import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Background from './Background';
import {templateBlue} from './Constants';
import Field from './Field';

const Login = props => {
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
            <Text style={styles.label}>E-Posta</Text>
            <TextInput
              style={styles.input}
              placeholder="admin@demo.com"
              keyboardType="email-address"
              autoComplete="email"
            />
          </View>
          <View style={styles.input_container}>
            <Text style={styles.label}>Şifre</Text>
            <TextInput
              style={styles.input}
              placeholder="demo"
              autoComplete="password"
              secureTextEntry={true}
            />
          </View>
          <Text style={styles.forgot_password_text}>Forgot Password ?</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Dashboard')}>
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
