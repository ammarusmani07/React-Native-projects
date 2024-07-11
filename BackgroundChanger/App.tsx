
import React, { useState } from 'react';

import {

  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  
  View,
} from 'react-native';



function App(): React.JSX.Element {

   const  [randomColor , setRanddomColor]= useState("#000000") 
   const generateColor = () => {
    const Hexagone='0123456789ABCDEF'
    let color='#'
    for ( let i = 0 ; i < 6 ; i++){
      color += Hexagone [Math.floor(Math.random() * Hexagone.length)]
             setRanddomColor(color);
    }
   }

  return (
    <>
    <StatusBar backgroundColor={randomColor} />
    <View style={[styles.container, {backgroundColor:randomColor}]}>
    <Text style={styles.description}>
          GEt your favrioute Color Code 
        </Text>
      <TouchableOpacity onPress={generateColor}>
       
        <View style={styles.actionbutton}>
    <Text style={styles.actionbuttonTxt}>Tap me </Text>
    </View>
    </TouchableOpacity>   
    <Text  selectable={true}  style={styles.colorCode}>
          {randomColor}
        </Text>  
     </View>
    </>
);
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  actionbutton:{
    borderRadius:5,
    backgroundColor:'black',
    padding:10,


  },
  description:{
    fontSize:20,
    color:'white',
    fontWeight:'bold',
    alignItems:'center'

  },
  actionbuttonTxt:{
    fontSize:20,
    color:'white',
    fontWeight:'bold'
  },
  colorCode: {
    fontSize: 30,
    color: 'white',
    marginTop: 20
  }
});

export default App;
