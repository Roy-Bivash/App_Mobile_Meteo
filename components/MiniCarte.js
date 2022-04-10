import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class MiniCarte extends React.Component {
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.styleTime}>{this.props.txtTime}</Text>
        <Text style = {styles.styleTemp}>{this.props.txtTemp}</Text>
        <Image style = {styles.styleImg} source={this.props.srcImg} />
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'white',
    // backgroundColor: 'orange',
    margin: 5,
    padding: 4,
    borderRadius: 12,
    width: 75,
    // height: 90,
  },
  styleTime:{
    color:'gray',
    fontSize:11,
    textAlign:'center',
  },
  styleTemp:{
    textAlign:'center',
    fontSize:16,
    padding:7,
  },
  styleImg:{
    height:30,
    width:30,
    alignSelf:'center',
  },

});


export default MiniCarte