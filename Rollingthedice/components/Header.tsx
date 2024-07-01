import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';


export default function Header() {
  

  return (
    <View >
        <View style={styles.header}>
            <View style={styles.firstcont}>
            <Image style={styles.Imgcont} source={{uri:'https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png'}}/>
       <Image style={styles.Imgcont } source={{uri:'https://icons.iconarchive.com/icons/aha-soft/software/256/user-group-icon.png'}} />
        <Image style={styles.Imgcont} source={{uri:'https://cdn-icons-png.flaticon.com/512/3750/3750043.png'}} />
        </View>
        <View style={styles.headersecd}>
            <Image style={styles. secondcont} source={{uri:'https://cdn-icons-png.flaticon.com/512/7921/7921549.png'}}/>
            <Text style={styles.Textcont}>135</Text>
            <Image style={styles. secondcont} source={{uri:'https://w7.pngwing.com/pngs/78/893/png-transparent-graphy-computer-icons-add-to-cart-button-miscellaneous-photography-trademark-thumbnail.png'}}/>
        </View>
        </View>
           
    </View>
  );
}

const styles = StyleSheet.create({
   Imgcont:{
    width:18,
    height:18,
    margin:10,
    borderRadius:6
   },
    header: {
   flexDirection:'row',
  
    paddingHorizontal:10,
    
  justifyContent:'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  headersecd: {
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'flex-end'
   
  },
  Textcont: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
    marginRight:8,
    marginBottom:8
  },
  firstcont: {
    flexDirection:'row'
  },
  secondcont:{
    width:15,
    height:15,
    marginBottom:18
    
  }
});
