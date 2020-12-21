import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Contact from '../screens/contact';
import About from '../screens/about';
import {Image, Button} from 'react-native';
// import React, { Component } from 'react';
// import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50,alignSelf:'center', }}
        source={require('../../assets/icon.png')}
      />
    );
  }

const Stack = createStackNavigator();

function Navigator(props) {
    console.log(props);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
                  
            headerStyle: {
              backgroundColor: '#1A5276',
              },

              headerTintColor: '#ffff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },          
        }} >
             
        <Stack.Screen name="Home" component={Home} options={
            ({navigation, route})=>({ headerTitle: props => <LogoTitle {...props} /> }
            )}
          />
        <Stack.Screen name="contact" component={Contact} />
        <Stack.Screen name="about" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigator;





