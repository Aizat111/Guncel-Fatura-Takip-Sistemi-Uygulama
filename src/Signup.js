import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Background from './Background';
import {templateBlue} from './Constants';
import Field from './Field';
import {Button} from './components/Button';

const Signup = props => {
  return (
    <Background>
      <Text style={styles.title}>Yeni Abonelik Oluştur</Text>

      <View style={styles.container}>
        <View style={styles.inner_container}>
          <View style={styles.input_container}>
            <Text style={styles.label}>Ad</Text>
            <TextInput style={styles.input} placeholder="Adınız" />
          </View>
          <View style={styles.input_container}>
            <Text style={styles.label}>Soyad</Text>
            <TextInput style={styles.input} placeholder="Soyadınız" />
          </View>
          <View style={styles.input_container}>
            <Text style={styles.label}>TC Kimlik Numara</Text>
            <TextInput
              style={styles.input}
              placeholder="TCnizi Giriniz"
              keyboardType="email-address"
              autoComplete="email"
            />
          </View>
          <View style={styles.input_container}>
            <Text style={styles.label}>E-Posta</Text>
            <TextInput
              style={styles.input}
              placeholder="E-Postanız"
              keyboardType="email-address"
              autoComplete="email"
            />
          </View>
          <View style={styles.input_container}>
            <Text style={styles.label}>Şifre</Text>
            <TextInput
              style={styles.input}
              placeholder="Şifre"
              autoComplete="password"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.input_container}>
            <Text style={styles.label}>Şifre Onayla</Text>
            <TextInput
              style={styles.input}
              autoComplete="password"
              placeholder="Şifrenizi Onaylayın"
              secureTextEntry={true}
            />
          </View>
        </View>

        <View style={styles.new_user_container}>
          <Text style={styles.new_user_text}>Zaten Kayıtlı Mısın? {''} </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={styles.signup_text}>Giriş Yap!</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>Kaydet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.button_text}>İptal</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 750,
    width: 400,
    borderTopLeftRadius: 100,
    alignItems: 'center',
  },
  title: {
    width: Dimensions.get('window').width,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 10,
    color: 'white',
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
    marginTop: 10,
    alignItems: 'center',
  },
  new_user_text: {
    color: 'gray',
    fontSize: 14,
  },
  signup_text: {
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
    marginTop: 25,
  },
  button_text: {color: 'white', fontSize: 15, fontWeight: 'bold'},
});
