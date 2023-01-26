import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Background from '../../Background';
import {templateBlue} from '../../Constants';
import {AuthContext} from '../../context/authContext';

const SingupSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Lütfen az 8 karakter giriniz')
    .max(50, 'En fazla 50 karakterden oluşmalı')
    .required('Zorunlu alan'),
  new_password: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Şifreniz uyuşmamaktadır'),
});

const initialValues = {
  password: '',
  new_password: '',
};

const ResetPassword = props => {
  const {signIn, users} = React.useContext(AuthContext);

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Yeni Şifre</Text>
        <View style={styles.new_user_container}>
          <Text style={styles.new_user_text}>
            Uygulamaya giriş yapmak için yeni şifre giriniz{''}{' '}
          </Text>
        </View>
        <Formik
          initialValues={initialValues}
          validationSchema={SingupSchema}
          onSubmit={values => {
            if (true) {
              props.navigation.navigate('Login');
            } else
              Alert.alert(
                'Uyarı!',
                `${values.tc} ile kayıtlı kullanıcı bulunmamaktadır`,
              );
          }}>
          {({values, handleChange, errors, handleBlur, handleSubmit}) => (
            <View>
              <View style={styles.inner_container}>
                <View style={styles.input_container}>
                  <Text style={styles.label}>Yeni Şişre</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Yeni Şifre"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                  />
                  {errors.password && (
                    <Text style={{fontSize: 12, color: '#FF0D10'}}>
                      {errors.password}
                    </Text>
                  )}
                </View>
              </View>
              <View>
                <View style={styles.input_container}>
                  <Text style={styles.label}>Yeni Şifreyi Tekrar Gir</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Yeni Şifre"
                    value={values.new_password}
                    onChangeText={handleChange('new_password')}
                    onBlur={handleBlur('new_password')}
                  />
                  {errors.new_password && (
                    <Text style={{fontSize: 12, color: '#FF0D10'}}>
                      {errors.new_password}
                    </Text>
                  )}
                </View>
              </View>

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.button_text}>Devam</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.button_text}>İptal</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </Background>
  );
};

export default ResetPassword;
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
    marginTop: 60,
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
    textTransform: 'capitalize',
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
    marginTop: 25,
  },
  button_text: {color: 'white', fontSize: 15, fontWeight: 'bold'},
});
