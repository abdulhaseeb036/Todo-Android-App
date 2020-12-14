import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ImageBackground, Text, View, Button } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={require('../../assets/download.png')}>
      <Text>Open th app asdsdsasadasd</Text>
      <Button title="About Us" onPress={() => props.navigation.navigate('about',{name:"haseeb alam rafiq"})} />
      <Button title="Contact Us" onPress={() => props.navigation.navigate('contact')} />
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    resizeMode: 'contain',
    width: '100%',
    height:'100%',
  
  }
});
