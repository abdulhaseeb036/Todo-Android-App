// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from '../screens/home';
// import Contact from '../screens/contact';
// import About from '../screens/about';
// import {Image, Button} from 'react-native';

// function LogoTitle() {
//     return (
//       <Image
//         style={{ width: 50, height: 50 }}
//         source={require('../../assets/icon.png')}
//       />
//     );
//   }

// const Stack = createStackNavigator();

// function Navigator(props) {
//     console.log(props);
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{
//           headerRight: () => (
//             <Button title="About Us" onPress={() => props.navigation.navigate('about')} />
//           ),
                  
//             headerStyle: {
//                 backgroundColor: '#f4511e',
//               },

//               headerTintColor: '#ffff',
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//               },          
//         }} >
             
//         <Stack.Screen name="Home" component={Home} options={
//             ({navigation, route})=>({ headerTitle: props => <LogoTitle {...props} /> }
//             )}
//           />
//         <Stack.Screen name="contact" component={Contact} />
//         <Stack.Screen name="about" component={About} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default Navigator;

import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/home';
import Contact from '../screens/contact';
import About from '../screens/about';

// Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'First Page', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="contact"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="contact"
        component={Contact}
        options={{
          title: 'Contact us', //Set Header Title
        }}
      />
      <Stack.Screen
        name="about"
        component={About}
        options={{
          title: 'About us', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="Home"
          options={{ drawerLabel: 'Home' }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="contact"
          options={{ drawerLabel: 'Contact Us' }}
          component={secondScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
