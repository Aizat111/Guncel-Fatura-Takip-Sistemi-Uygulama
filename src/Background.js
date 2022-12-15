import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Background = ({ children }) => {
  return (
    <SafeAreaView  style={styles.container}>
     

      <View style={styles.inner_container}>
        {children}
      </View>
      
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#40a1ae',
        flex: 1,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inner_container: {
        margin: 'auto',
        position: 'absolute',
   
    }
})
export default Background;