import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

import img from '../assets/bg.jpg';

class Header extends React.Component {
  render(){
    return(
      <View style = {styles.container}>
        <ImageBackground  style = {styles.img} source={require('../assets/bg.jpg')} >
          <Text style = {styles.titre}>Météo</Text>
        </ImageBackground >
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#3938BD',
  },
  img:{
    width: '100%',
    height: 200,
  },
  titre:{
    color: 'white',
    textAlign: 'center',
    marginTop: 60,
    fontSize: 30,
  },

});




export default Header