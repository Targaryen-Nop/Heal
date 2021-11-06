import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {Avatar} from 'react-native-paper';
import {th} from 'date-fns/locale';
import {format} from 'date-fns';

import {globeStyles} from '../styles/globle';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SaveATKScreen = ({navigation}) => {
    return (
        <ScrollView>
          <View style={{paddingHorizontal:20,paddingTop:20}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}>
              <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Image
                  source={require('../assets/back.png')}
                  style={{width: 50, height: 50}}
                />
              </TouchableOpacity>
              <Text style={[styles.text,globeStyles.fontBold]}>MY PROFILE</Text>
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
                <Text style={[styles.text,globeStyles.fontBold]}>MY TODAY</Text>
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
    
          <View style={globeStyles.cardlayout}>
            <Text />
            <View style={[globeStyles.cardinside]}>
              <View style={{alignItems:'center'}}>
                  <Text style={[styles.text,globeStyles.fontBold]}>บันทึกประวัติ ATK</Text>
                  <TextInput style={styles.input} placeholder='ใส่ข้อมูล'/>
                  <TextInput style={styles.input} placeholder='ใส่ข้อมูล'/>
                  <TextInput style={styles.input} placeholder='ใส่ข้อมูล'/>
                  <TextInput style={styles.input} placeholder='ใส่ข้อมูล'/>
                  <TextInput style={styles.input} placeholder='ใส่ข้อมูล'/>
                  <TextInput style={styles.input} placeholder='ใส่ข้อมูล'/>
                  <TextInput style={styles.input} placeholder='ใส่ข้อมูล'/>
                  <TextInput style={styles.input} placeholder='ใส่ข้อมูล'/>
                  <TextInput style={styles.input} placeholder='ใส่ข้อมูล'/>
                  <TextInput style={styles.input} placeholder='ใส่ข้อมูล'/>
              </View>

            </View>
          </View>
        </ScrollView>
      );
    };
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#D3D3D3',
      },
      borderBot: {
        borderBottomWidth: 1,
        width: '90%',
        alignSelf: 'center',
        borderColor:'#287094'
      },
      flexRow: {
        flexDirection: 'row',
        paddingVertical: 20,
        alignItems: 'center'
      },
      text:{
        fontSize:25,
      },
      input:{
          borderColor:'#287094',
          borderBottomWidth:1,
          width:'90%'
      }
});

export default SaveATKScreen
