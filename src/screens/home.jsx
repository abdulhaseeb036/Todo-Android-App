import { StatusBar } from 'expo-status-bar';
import { Row } from 'native-base';
import React from 'react'; 
import { render } from 'react-dom';
import firebase from '../config/firebaseconfig';
import { Text, StyleSheet, Button, FlatList, ImageBackground, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';

export default function Home(props) {
  

  
  const [to, show_todo] = useState([])

  // get data from firebase................
  get_data = () => {
   
    firebase.database().ref('/').on('value', (data) => {
          show_todo([data.val()])
          console.log(data.val);
    })
  }
  // console.log(to);

    /////.............................................................


    // get value from input
    const [value, onChangeText] = React.useState(value);
    // console.log(value);



    // set value from input
    const DATA = {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: value,
      }
    


    add_todo = () => {
      firebase.database().ref('/').push(DATA);

    }


    deleteall_todo = () => {
      alert("all todo deleted...")
    }

    // let { todolist } = this.state;
    // console.log(todolist)
    return (

      <ScrollView>
        <View style={styles.container}>

          <ImageBackground style={styles.backgroundImage} source={require('../../assets/download.png')}>
            <View style={styles.main}>
              <Text style={styles.mainh1}>ToDo App</Text>
            </View>

            <View style={styles.main1}>
              <View>
                <TextInput
                  onChangeText={text => onChangeText(text)}
                  value={value}
                  style={{
                    height: 40,
                    borderColor: '#fff',
                    borderWidth: 1,
                    backgroundColor: '#ffff',
                    textAlign: 'center',
                    borderRadius: 20,
                    width: 200,
                    marginLeft: -10,

                  }}
                  placeholder="Type Your TODO Here"
                />
              </View>

              <View>
                <TouchableOpacity onPress={add_todo} style={{ backgroundColor: '#000', marginLeft: 10, justifyContent: 'center', alignItems: 'center', width: 70, height: 40, borderRadius: 20, }}><Text style={{ color: '#fff', textAlign: 'center' }}>Add</Text></TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={get_data} style={{ backgroundColor: '#000', marginLeft: 10, justifyContent: 'center', alignItems: 'center', width: 70, height: 40, borderRadius: 20, }}><Text style={{ color: '#fff', textAlign: 'center' }}>Add</Text></TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={deleteall_todo} activeOpacity={0.8} style={{ backgroundColor: '#000', marginLeft: 10, justifyContent: 'center', alignItems: 'center', width: 81, height: 40, borderRadius: 20, }}><Text style={{ color: '#fff', textAlign: 'center' }}>Delete All</Text></TouchableOpacity>
              </View>
            

            </View>
          
            {[to].map((v, i) => {
              console.log(v.title)
          return (
          <View key={i} style={styles.card}>
          <Text style={{textAlign:'center' , fontSize: 10,}}>{v.title}</Text>
        </View>
          )
          })
          }


            <StatusBar style="auto" />
          </ImageBackground>
        </View>
      </ScrollView>
    )
  }
  
  
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImage: {
      resizeMode: 'contain',
      width: '100%',
      height: '100%',

    },

    // top heder todo
    main: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      height: 10,
      marginBottom: 60,
    },
    mainh1: {
      color: '#fff',
      fontSize: 60,
    },


    // todolist middle
    main1: {
      flex: 1,
      flexDirection: 'row',
      alignContent: 'space-around',
      // width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      alignItems: 'stretch',
      marginBottom: 50,

    },

    // main 2 foooter
    card: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: 10,
      shadowColor: "#000",
      backgroundColor: '#fff',
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 20,
      height: 50,
      shadowOffset: {
        width: 0,
        height: 11,
      },
      shadowOpacity: 0.55,
      shadowRadius: 14.78,

      elevation: 22,
    }
  }

  )

