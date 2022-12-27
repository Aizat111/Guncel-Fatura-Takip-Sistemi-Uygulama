import React from 'react';
import {View, Text} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import InvoiceDetail from '../components/InvoiceDetail/InvoiceDetail';

const Faturalar = props =>{
    return(
        <SafeAreaView style={{paddingTop:50, backgroundColor: 'white', flex:1}}>
          
        <View>
           
            <View style={{alignItems: 'center'}}>
            <InvoiceDetail/>
            </View>
         
        </View>
        
        </SafeAreaView>
      
    )
}
export default Faturalar;