import {  Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { FlatCards } from './components/FlatCards'
import { ElevatedCards } from './components/ElevatedCards'
import { TrendingPlaces } from './components/TrendingPlaces'
import { Touchableabout } from './components/Touchableabout'
import  ContactList from './components/ContactList'
 
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  }
})





const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      
      <FlatCards/>
      <ElevatedCards/>
      <TrendingPlaces/>
       <Touchableabout/>
       <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App