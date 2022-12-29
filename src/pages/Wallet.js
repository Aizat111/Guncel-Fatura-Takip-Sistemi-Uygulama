import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {CreditCardInput,LiteCreditCardInput} from 'react-native-credit-card-input';

const USE_LITE_CREDIT_CARD_INPUT = false;
const Wallet = ()=>{
    return(
        <View style={styles.container}>
           {USE_LITE_CREDIT_CARD_INPUT ? (<LiteCreditCardInput/>) : (<CreditCardInput/>)}
           
        </View>
    )
}

export default Wallet;
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: 'white'
    }
})