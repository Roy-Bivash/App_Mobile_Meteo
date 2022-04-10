import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


class CarteSecondaire extends React.Component {
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.textColor}>Ressentie de : {this.props.txtRessentie} °C</Text>
        <Text style = {styles.textColor}>Humidité : {this.props.txtHumidite} %</Text>
        <Text style = {styles.textColor}>Pression : {this.props.txtPression} hPa</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'white',
    margin: 10,
    padding: 15,
    borderRadius: 18,
    
  },
  textColor: {
    fontSize: 12,
  }
});


export default CarteSecondaire