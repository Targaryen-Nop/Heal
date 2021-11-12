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
  ScrollView,
} from 'react-native';

import {globeStyles} from '../styles/globle';

const RegisterScreen = () => {

  const [isSelected, setSelection] = React.useState(false);

  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
});

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={{alignItems: 'center'}}>
            <TextInput
              placeholder="First Name"
              style={[styles.textinput, styles.shadow]}
            />
            <TextInput
              placeholder="Last Name"
              style={[styles.textinput, styles.shadow]}
            />
            <TextInput
              placeholder="Email"
              keyboardType='email-address'
              style={[styles.textinput, styles.shadow]}
            />
            <TextInput
              placeholder="Phone Number"
              keyboardType='phone-pad'
              style={[styles.textinput, styles.shadow]}
            />
            <TextInput
              placeholder="Password"
              keyboardType='visible-password'
              style={[styles.textinput, styles.shadow]}
            />
            <TextInput
              placeholder="ConfirmPassword"
              style={[styles.textinput, styles.shadow]}
            />
            <View
              style={{flexDirection: 'row', padding: 20, alignItems: 'center'}}>
              <CheckBox value={isSelected} onValueChange={setSelection} />
              <Text style={globeStyles.fontWhite}>
                I Agree with privacy and policy
              </Text>
            </View>
            <TouchableOpacity
              style={[
                {
                  width: 125,
                  height: 50,
                  backgroundColor: '#287094',
                  borderRadius: 50,
                  marginStart: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                styles.shadow,
              ]}>
              <Text style={[globeStyles.fontWhite, {fontSize: 20}]}>
                Sign in
              </Text>
            </TouchableOpacity>
            <Text style={{height: 40}} />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
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

export default RegisterScreen;
