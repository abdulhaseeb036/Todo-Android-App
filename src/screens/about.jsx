import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ImageBackground, Text, View } from 'react-native';

export default function About({route}) {
    const { name} = route.params;
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Text>{name}</Text>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
