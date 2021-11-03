import React from 'react'
import { View, Text,Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ATKReportScreen = ({navigation}) => {
    return (
    
       <View style={{flex:1,backgroundColor:'black'}}>
           <Image source={require('../assets/logo.png')} style={{width:100,height:100}} resizeMode='cover' />
       </View>
       
    )
}

export default ATKReportScreen
