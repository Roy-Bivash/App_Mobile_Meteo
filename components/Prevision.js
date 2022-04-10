import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

import MiniCarte from '../components/MiniCarte';


class Prevision extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <MiniCarte 
          txtTime="15:00"
          txtTemp="8°C"
          srcImg={require('../assets/orrage.png')}
          />
          <MiniCarte 
          txtTime="16:00"
          txtTemp="6°C"
          srcImg={require('../assets/pluie.png')}
          />
          <MiniCarte 
          txtTime="17:00"
          txtTemp="5°C"
          srcImg={require('../assets/pluie.png')}
          />
          <MiniCarte 
          txtTime="18:00"
          txtTemp="5°C"
          srcImg={require('../assets/neige.png')}
          />
          <MiniCarte 
          txtTime="19:00"
          txtTemp="6°C"
          srcImg={require('../assets/pluie.png')}
          />
          <MiniCarte 
          txtTime="20:00"
          txtTemp="3°C"
          srcImg={require('../assets/nuageux.png')}
          />
          <MiniCarte 
          txtTime="21:00"
          txtTemp="1°C"
          srcImg={require('../assets/nuageux.png')}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    // backgroundColor: 'white',
    // margin: 10,
    // padding: 15,
    // borderRadius: 18,
    // marginTop:15,
  },




});


export default Prevision