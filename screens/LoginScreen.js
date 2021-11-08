import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  CheckBox,
  Image,
  TextInput,
  TouchableOpacityBase,
  TouchableOpacity,
} from 'react-native';

import {globeStyles} from '../styles/globle';

const LoginScreen = () => {
  const [isSelected, setSelection] = React.useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={{alignItems: 'center', marginTop: 50}} >
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={{marginTop: 75}}>
            <Text style={[globeStyles.fontWhite, {fontSize: 20}]}>
              {' '}
              Login to your Account
            </Text>
            <TextInput placeholder="username" style={[styles.textinput,styles.shadow]} />
            <TextInput placeholder="username" style={[styles.textinput,styles.shadow]} />
            <View
              style={{flexDirection: 'row', padding: 20, alignItems: 'center'}}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                
              />
              <Text style={globeStyles.fontWhite}>Remember me</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={[{
                  width: 125,
                  height: 50,
                  backgroundColor: '#fff',
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                },styles.shadow]}>
                <Text style={[globeStyles.font,{fontSize:20}]}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[{
                  width: 125,
                  height: 50,
                  backgroundColor: '#287094',
                  borderRadius: 50,
                  marginStart: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                },styles.shadow]}>
                <Text style={[globeStyles.fontWhite,{fontSize:20}]}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  logo: {
    width: 200,
    height: 100,
  },
  textinput: {
    backgroundColor: '#fff',
    width: 300,
    height: 50,
    borderRadius: 50,
    marginTop: 25,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
export default LoginScreen;
