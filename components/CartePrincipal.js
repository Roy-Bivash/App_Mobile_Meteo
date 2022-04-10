import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


class CartePrincipal extends React.Component {

  format(){
    var option = {year: 'numeric', month:'long', day:'numeric'}
    return new Date().toLocaleDateString([], option);
  }



  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.styleVille}>{this.props.txtVille}</Text>
        <Text style = {styles.styelDate}>{this.format()}</Text>
        <View style={styles.miniContainer}>
          <Text style = {styles.styelTemp}>{Math.round(this.props.txtTemp)} °C</Text>
          <Image style  = {styles.styelImg} source = {this.props.srcImage} />
        </View>
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
  miniContainer:{
    marginTop: 40,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent:'space-around',
    
  },
  styleVille: {
    fontSize:18,
  },
  styelDate: {
    fontSize: 10,
    color:'#808B96',
  },
  styelTemp: {
    // backgroundColor: 'orange',
    fontSize: 32,
    padding: 15,
    textAlign: 'left',
    flexBasis: 200,

  },
  styelImg: {
    // backgroundColor: 'gray',
    width: 90,
    height: 90,
  },


});


export default CartePrincipal