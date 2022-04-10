import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, ScrollView, ActivityIndicator  } from 'react-native';
import Constants from 'expo-constants';
import Axios from 'axios';


// You can import from local files
import Header from './components/Header';
import CartePrincipal from './components/CartePrincipal';
import CarteSecondaire from './components/carteSecondaire';
import Prevision from './components/Prevision';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


const API_URL = "http://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&units=metric&appid=Keyyyyy";


export default function App() {

  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    if(loading){
      getWeather()
      return(
        <View>
          <ActivityIndicator />
          <Text>Loading...</Text>
        </View>
      )
    }

  })

  const getWeather = async () =>{
    try{
      const response = await Axios.get(API_URL)
      setData(response.data)
      setLoading(false)
    }catch(erreur){
      console.log('Erreur : ' + erreur)
    }
  }
  
  return (
    <View style={styles.globale}>
      <StatusBar backgroundColor="#6947e3" />
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <Header />
        <CartePrincipal
          txtVille={data?.name}
          txtTemp={data?.main.temp}
          srcImage={require('./assets/soleil.png')}
        />
        <Prevision />
        <CarteSecondaire 
          txtRessentie={data?.main.feels_like}
          txtHumidite={data?.main.humidity}
          txtPression={data?.main.pressure}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  globale:{
    backgroundColor: '#F0F8FF',
    paddingTop: Constants.statusBarHeight,
    height: '100%',
  }

});
