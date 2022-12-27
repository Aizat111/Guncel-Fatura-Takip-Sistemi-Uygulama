import React from 'react';
import {View, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';

const Dashboard = props =>{
    return(
        <SafeAreaView style={{paddingTop:80}}>
              <View>
            <Text>
                Dashboard
            </Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Faturalar')}>
            <Text>
              faturalar
            </Text>
        </TouchableOpacity>
        <View>
            <Text>
              thekjf
            </Text>
        </View>
        <View>
            <Text>
              kcjsdkls
            </Text>
        </View>
        </SafeAreaView>
      
    )
}
export default Dashboard;