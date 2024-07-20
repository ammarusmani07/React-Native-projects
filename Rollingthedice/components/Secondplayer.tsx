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
import Defaultbvolly from '../assets/vollyball.png'
import Dicefive from '../assets/Five.png';
import Dicesix from '../assets/Six.png';



type Diceprop2= PropsWithChildren<{imageurl:ImageSourcePropType, onPress: ()=> void}>
const Dice2=({imageurl , onPress} : Diceprop2): JSX.Element => {
  return(
    <Pressable onPress = {onPress}>
      <Image style={styles.imagecont} source={imageurl}/>
        

      
    </Pressable>
  )

} 

export default function secondplace() {
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
      const [ diceImage, setDiceImage]= useState<ImageSourcePropType>(Defaultbvolly)
    
  return (
    <View>
 <View>
      <Text style={styles.Nametext}>
       Uziiii Crush
      </Text>
    </View>
    <View style={styles.topcont}>
    
    <View style={styles.Maincont}>
    
      <Image style={styles.personImage} source={{uri:'data:image/jpeg;base64,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'}}/>
          
    </View>
    <View >
    <View>
     
      <View style={styles.Maincont}>
      <Dice2 imageurl={diceImage} onPress={rooldice}/>
        <Image style={styles.personImage} source={{uri:'https://i.pinimg.com/236x/9c/7f/67/9c7f678ad4bc2496ca9120a0af5fa8b8.jpg'}}/>
        
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
  marginLeft:40,
  marginTop:6,
    width:45,
    height:15,
    marginRight:2
       },
       Text :{
        color:"white",
        fontSize:10,
        fontWeight:"bold",
        textAlign:'center'
      
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
       Nametext:{
        fontSize:10,
        color:'white',
        fontWeight:'bold',
        marginRight:42,
        textAlign:'right',
        marginTop:20
       }
})