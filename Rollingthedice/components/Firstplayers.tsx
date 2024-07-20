import { StyleSheet, Text, View,ImageSourcePropType,
    
    
    Image,
    
    Pressable,
     } from 'react-native'
import {  type PropsWithChildren,useState} from 'react';
import React from 'react'

import Diceone from '../assets/One.png';
import Dicetwo from '../assets/Two.png';
import Dicethree from '../assets/Three.png';
import Dicefour from '../assets/Four.png';
import  Haptics from 'react-native-haptic-feedback';
import Dicefive from '../assets/Five.png';
import Dicesix from '../assets/Six.png';
import Defaultbasket from '../assets/basketball.png'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

type Diceprop= PropsWithChildren<{imageurl:ImageSourcePropType, onPress: ()=> void}>
const Dice=({imageurl , onPress} : Diceprop): JSX.Element => {
  return(
    <Pressable onPress = {onPress}>
      <Image style={styles.imagecont} source={imageurl}/>
        

      
    </Pressable>
  )

} 

export default function firstplace() {
    const rooldice= () => {
        let randomnno= Math.floor(Math.random() *6 )+1
        switch(randomnno) {
          case 1:
            setDiceImage(Diceone)
            break;
          case  2:
            setDiceImage(Dicetwo)
            break;
          case 3:
             setDiceImage(Dicethree)
            break;
          case 4:
             setDiceImage(Dicefour)
            break;
          case 5:
                setDiceImage(Dicefive)  
            break;
          case 6:
        setDiceImage(Dicesix)
            break;
        }
        
      }
      const [ diceImage, setDiceImage]= useState<ImageSourcePropType>(Defaultbasket)
     
      ReactNativeHapticFeedback.trigger("impactLight", options);
      

      
  return (
<View>
<View>
      <Text style={styles.Nametext}>
       Ahmad Afzal
      </Text>
    </View>
    <View style={styles.topcont}>
      <View>
      
    <View style={styles.Maincont}>
      <Image style={styles.personImage} source={{uri:'data:image/jpeg;base64,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'}}/>
          <Dice imageurl={diceImage} onPress={rooldice}/>
    </View>
    <View style={styles.chatrow}>
    <View style={styles.chat}>
    <Text style={styles.Text}>
      Chat
    </Text>
    </View>
    <View style={styles.Emoji}>
    <Text style={styles.Text}>
      Emoji
    </Text>
    </View>
    </View>
    </View>
    <View >
    
    <View style={styles.Maincont}>
    
      <Image style={styles.personImage} source={{uri:'data:image/jpeg;base64,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'}}/>
          
    </View>
    
    </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    imagecont:{
      width:29,
      height:29,
      borderRadius:3,
      
      marginTop:14
        
       },
       chatrow:{
        flexDirection:'row'
       },
       topcont:{
        flexDirection:'row',
        justifyContent:"space-between"
       },
       chat:{
        backgroundColor: '#777E8B',
    borderRadius: 8,
  marginLeft:25,
  marginTop:6,
    width:45,
    height:15
       },
       Emoji:{
        backgroundColor: '#777E8B',
    borderRadius: 8,
  marginLeft:5,
  marginTop:6,
    width:45,
    height:15
       },
      
       Maincont:{
        flex:1,
        flexDirection:'row',
        
        alignItems:'flex-start',
        justifyContent:'flex-start',
        paddingHorizontal:28
      
       },
       personImage:{
        width:50,
        height:50,
        borderRadius:100/2,
        marginRight:12,
        marginTop:2,
        marginLeft:12,
        borderWidth:4,
        borderColor:'green'
       },
       Text :{
        color:"white",
        fontSize:10,
        fontWeight:"bold",
        textAlign:'center'
      
       },
       Nametext:{
        fontSize:10,
        color:'white',
        fontWeight:'bold',
        marginLeft:14,
        paddingLeft:20,
        marginTop:25
       }
})