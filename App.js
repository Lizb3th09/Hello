import { useState } from "react";
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';


const App = () => {
 
  
  return (
    <SafeAreaView style={styles.contenedor}>

  <View style={styles.hijoA}></View>

     <View style={styles.hijoA}></View>

      <View style={styles.hijoB}>
        <Image style={styles.image} source={{uri:'https://wallpapers-clan.com/wp-content/uploads/2022/07/kuromi-pfp-3.jpg'}}></Image>
        <Text style={styles.name}>Lizzy ❤️</Text>
    </View>


    <View style={styles.descriptionContenedor}>
    <Icon name="chatbox-outline" size={26 }/>
    <Icon name="call-outline" size={26}/>
    <Icon name="person-add-outline" size={26}/>
      </View>

      <View style={styles.descriptionContenedor}>   
        <Text style={styles.texto2}>Folliwind 1986</Text>
        <Text style={styles.texto2}>Follew 66</Text>
      </View>



    <View style={styles.contenedor3}>
    <Icon name="person-add-outline" size={26}/> 
     <Text style={styles.texto}>Theme</Text>
    </View>

    <View style={styles.contenedor3}>
    <Icon name="share-social-outline" size={26}/> 
        <Text style={styles.texto}>Share this App</Text>
    </View>

    <View style={styles.contenedor3}>
    <Icon name="moon-outline" size={26}/> 
        <Text style={styles.texto}>Night Mode</Text>
    </View>

    <View style={styles.contenedor3}>
    <Icon name="settings-outline" size={26}/> 
        <Text style={styles.texto}>Configuration</Text>
    </View>

    <View style={styles.contenedor4}>
    <Icon name="chevron-back-outline" size={32}/>
    <Icon name="home-outline" size={32}/>
    <Icon name="chevron-forward-outline" size={32}/>
    </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
inputs:{
  backgroundColor:'red',
  padding:10,
  marginHorizontal:7,
},

Botton:{},

 
 titulo:{

  fontSize:22,
 },

 name:{
  fontSize:18,
  justifyContent: 'center',
  alignItems: 'center',
 },
 
 

  contenedor:{
    flex: 3,
    backgroundColor: '#dee2ff',
    
  },


  hijoA:{
    
    flex:1/3,
    backgroundColor: '#10002b',
    justifyContent: 'center',
    alignItems: 'center'},



  hijoB:{
    marginHorizontal:33,
    marginVertical:11,
    backgroundColor: 'white',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  

  image:{
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical:6,
  },




texto:{

 textTransform: 'uppercase',
 fontSize:12
 
},

texto2:{
  
  marginHorizontal:33,
  textTransform: 'uppercase',
  fontSize:12,
  paddingVertical:11,
},


contenedor3:{
  
 marginHorizontal:33,
  marginVertical:9,
  backgroundColor: 'white',
  flex: 1/2,
  flexDirection:'row',
  paddingHorizontal:52,
  alignItems:'center'
 
},


contenedor4:{

 
  backgroundColor: '#dee2ff',
  flex: 1/2,
  justifyContent:'space-around',
  alignItems:'center',
  paddingHorizontal:22,
  flexDirection:'row',
  
},


descriptionContenedor:{
  
  marginHorizontal:33,
  backgroundColor: '#dee2ff',
  alignItems:'center',
  justifyContent:'space-around',
  flexDirection:'row',
 },


 tamaño:{
  fontSize:20,
  justifyContent:'center',
  backgroundColor: 'white',
  marginHorizontal:33,
  marginTop:12,
 
 },




})


export default App
