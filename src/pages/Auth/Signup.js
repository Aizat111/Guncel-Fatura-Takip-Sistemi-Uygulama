import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
  Button,
  ScrollView
} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Background from '../../Background';
import {templateBlue} from '../../Constants';
// import { AuthContext } from '../../context/authContext';


const SingupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, 'Lütfen az 3 karakter giriniz')
    .max(50, 'En fazla 50 karakterden oluşmalı')
    .required('Zorunlu alan'),
  lastname: Yup.string()
    .min(3, 'Lütfen az 3 karakter giriniz')
    .max(50, 'En fazla 50 karakterden oluşmalı')
    .required('Zorunlu alan'),
  telNo: Yup.string()
    .min(3, 'Lütfen az 3 karakter giriniz')
    .max(50, 'En fazla 50 karakterden oluşmalı')
    .required('Zorunlu alan'),
  tc: Yup.number('TC sadece numara girebilirsiniz')
    // .min(3, 'Lütfen az 3 karakter giriniz')
    // .max(50, 'En fazla 50 karakterden oluşmalı')
    .required('Zorunlu alan'),
  email: Yup.string()
    .email('Lütfen E-Posta adresini doğru şekide giriniz')
    .min(3, 'Lütfen az 3 karakter giriniz')
    .max(50, 'En fazla 50 karakterden oluşmalı')
    .required('Zorunlu alan'),
  password: Yup.string()
    .min(8, 'Lütfen en az 8 karakter giriniz')
    .max(50, 'En fazla 50 karakter olabilir')
    .required('Zorunlu alan'),
  address: Yup.string()
    .min(3, 'Lütfen az 3 karakter giriniz')
    .max(50, 'En fazla 50 karakterden oluşmalı')
    .required('Zorunlu alan'),
});

const initialValues = {
  firstname:'',
  lastname:'',
  tc:'',
  address:'',
  email: '',
  password: '',
};

const Signup = props => {
  // const {signUp,users} = React.useContext(AuthContext);
  return (
    <Background>
        <ScrollView>
      <Text style={styles.title}>Yeni Abonelik Oluştur</Text>

      <Formik
        initialValues={initialValues}
        validationSchema={SingupSchema}
        onSubmit={values => {
          if(users.filter((item)=> (item?.tc===values.tc)).length<1){
            
            signUp(values);
          }   
          else
          Alert.alert('Uyarı!',`${values.tc} ile kayıtlı kullanıcı bulunmaktadır`)
        }}>
        {({
          values,
          handleChange,
          errors,
          handleBlur,
          handleSubmit,
          
        }) => (
          <View style={styles.container}>
            <View style={styles.inner_container}>
              <View style={styles.input_container}>
                <Text style={styles.label}>Ad</Text>
                <TextInput
                  value={values.firstname}
                  onChangeText={handleChange('firstname')}
                  onBlur={handleBlur('firstname')}
                  style={styles.input}
                  placeholder="Adınız"
                />
                {errors.firstname && (
                  <Text style={{fontSize: 12, color: '#FF0D10'}}>
                    {errors.firstname}
                  </Text>
                )}
              </View>
              <View style={styles.input_container}>
                <Text style={styles.label}>Soyad</Text>
                <TextInput
                  value={values.lastname}
                  onChangeText={handleChange('lastname')}
                  onBlur={handleBlur('lastname')}
                  style={styles.input}
                  placeholder="Soyadınız"
                />
                {errors.lastname && (
                  <Text style={{fontSize: 12, color: '#FF0D10'}}>
                    {errors.lastname}
                  </Text>
                )}
              </View>
              <View style={styles.input_container}>
                <Text style={styles.label}>TC Kimlik Numara</Text>
                <TextInput
                  style={styles.input}
                  placeholder="T.C. nizi Giriniz"
                  value={values.tc}
                  onChangeText={handleChange('tc')}
                  onBlur={handleBlur('tc')}
                />
                 {errors.tc && (
                  <Text style={{fontSize: 12, color: '#FF0D10'}}>
                    {errors.tc}
                  </Text>
                )}
              </View>
              <View style={styles.input_container}>
                <Text style={styles.label}>E-Posta</Text>
                <TextInput
                  style={styles.input}
                  placeholder="E-Postanız"
                  keyboardType="email-address"
                  autoComplete="email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                 {errors.email && (
                  <Text style={{fontSize: 12, color: '#FF0D10'}}>
                    {errors.email}
                  </Text>
                )}
              </View>
              <View style={styles.input_container}>
                <Text style={styles.label}>Telefon Numarası</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Telefon Numarası"
                 
                  value={values.telNo}
                  onChangeText={handleChange('telNo')}
                  onBlur={handleBlur('telNo')}
                />
                 {errors.telNo && (
                  <Text style={{fontSize: 12, color: '#FF0D10'}}>
                    {errors.telNo}
                  </Text>
                )}
              </View>
              <View style={styles.input_container}>
                <Text style={styles.label}>Adres</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Adres Giriniz"
                  value={values.address}
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                />
                 {errors.address && (
                  <Text style={{fontSize: 12, color: '#FF0D10'}}>
                    {errors.address}
                  </Text>
                )}
              </View>
              <View style={styles.input_container}>
                <Text style={styles.label}>Şifre</Text>
                <TextInput
                  style={styles.input}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder="Şifre"
                  autoComplete="password"
                  secureTextEntry={true}
                />
                 {errors.password && (
                  <Text style={{fontSize: 12, color: '#FF0D10'}}>
                    {errors.password}
                  </Text>
                )}
              </View>

            </View>

            <View style={styles.new_user_container}>
              <Text style={styles.new_user_text}>
                Zaten Kayıtlı Mısın? {''}{' '}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.signup_text}>Giriş Yap!</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text  style={styles.button_text}>Kaydet</Text>
            </TouchableOpacity>
            {/* <Button
              color="#3740FE"
              title='Submit'
           
              onPress={handleSubmit}
            /> */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.button_text}>İptal</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      </ScrollView>
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
