import React from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity, } from 'react-native'
import { Avatar } from 'react-native-paper'
import { globeStyles } from '../styles/globle'
import {th} from 'date-fns/locale';
import {format} from 'date-fns';


const CardProfile = ({navigation}) => {
    return (
        <View style={{paddingHorizontal:20,paddingTop:20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image
              source={require('../assets/back.png')}
              style={{width: 50, height: 50}}
            />
          </TouchableOpacity>
          <Text style={styles.text}>MY PROFILE</Text>
          <TouchableOpacity>
            <Image
              source={require('../assets/setting.png')}
              style={{width: 50, height: 50}}
            />
          </TouchableOpacity>
        </View>
        <Avatar.Image
          source={{
            uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
          }}
          size={75}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.text}>MY TODAY</Text>
            <Text style={[globeStyles.font, {fontSize: 15}]}>
              {format(new Date(), 'dd MMMM yyyy', {locale: th})}
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../assets/scan.png')}
              style={{width: 200, height: 50}}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
    text:{
        color: '#287094', 
        fontFamily: 'Prompt-Bold',
        fontSize:25,
    }
})
export default CardProfile
