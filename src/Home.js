import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import {templateBlue, green} from './Constants';
import {Button} from './components/Button';

const Home = props => {
  return (
    <Background>
      <View style={{marginHorizontal: 40, marginVertical: 100}}>
        <Text
          style={{
            color: 'white',
            fontSize: 40,
            marginBottom: 100,
            fontFamily: 'Georgia',
          }}>
          Fatura Takip Sistemine Hoş geldiniz
        </Text>
        <Button
          text="Giriş Yap"
          Press={() => props.navigation.navigate('Login')}
        />
        <Button
          text="Kaydol"
          Press={() => props.navigation.navigate('SignUp')}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default Home;
