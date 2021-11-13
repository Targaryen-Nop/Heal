import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {Avatar} from 'react-native-paper';
import {th} from 'date-fns/locale';
import {format} from 'date-fns';

import {globeStyles} from '../styles/globle';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useSelector, useDispatch} from 'react-redux';
import {getVersion} from '../redux/actions/authAction';

import axios from 'axios';

import {parse} from 'fast-xml-parser';
const parseString = require('react-native-xml2js').parseString;
//const XMLParser = require('react-xml-parser');
//import XMLParser from 'react-xml-parser';

const NewsSreen =  ({navigation}) => {
  const [version, setVersion] = React.useState('');
  const [data, setData] = React.useState();

  const getData = async () => {
    const resp = await axios.get('https://api.codingthailand.com/api/version');
    setVersion(resp.data.data.version);
  };

  // const getXMLResponse = async () => {
  //   const response = await fetch('https://gorest.co.in/public-api/posts.xml');
  //   console.log('response is' + response);
  // };

  const getSurfaces=()=>{
    fetch('https://gorest.co.in/public-api/posts.xml')
        .then((response) => response.text())
        .then((responseText) => {
            parseString(responseText, function (err, result) {
                console.log(response)
            });
        })
        .catch((err) => {
            console.log('Error fetching the feed: ', err)
    })
}


  React.useEffect(() => {
    getData();
    getSurfaces();
    //console.log(xml);
  }, []);

  return (
    <ScrollView>
      <ImageBackground
        source={require('../assets/background_gray.jpg')}
        style={{flex: 1}}
        resizeMode="cover">
        <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                source={require('../assets/back.png')}
                style={{width: 50, height: 50}}
              />
            </TouchableOpacity>
            <Text style={[styles.text, globeStyles.fontBold]}>ข่าวสาร</Text>
            <TouchableOpacity>
              <Image
                source={require('../assets/setting.png')}
                style={{width: 50, height: 50}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={globeStyles.cardlayout}>
          <Text />
          <View style={[globeStyles.cardinside]}>
            <Text>dawd {version}</Text>
            <Text>r</Text>
          </View>
        </View>
      </ImageBackground>
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
    borderColor: '#287094',
  },
  flexRow: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
});

export default NewsSreen;
