import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ElevatedCards } from './ElevatedCards'

export function TrendingPlaces() {
  return (
    <View>
      <Text style={styles.headingText}>Trending</Text>
      <ScrollView  horizontal >
        <View style={[styles.card , styles.Elevatedcard]}>
        <Image source={{uri:'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQUNjavGNLx726Pz9ZVbVca9TYbA2wReQdgKp-NXHw3QTnVU9tSxVEvWLBURMX8LmWpu6M6sxlpUZCcM2p_sqQBGg9MNS3UOlY2axxZ6scJa1QCpJrQXrFaXABLJZQaJdHj2setyYXqipKeNkwhk-6GJa.jpg?r=396.jpg' }}
          style={styles.image}
          resizeMode='cover'/>
          <View style={styles.titlecontainer}>
          <Text style={styles.title}>
            Gray Man
          </Text>
          <Text style={styles.type}>(Movie)</Text>
          </View>
          <Text style={styles.description}>When the CIA's most skilled operative, whose true identity is known to none, accidentally uncovers dark agency secrets, 
            a psychopathic former colleague puts a bounty on his head, setting off a global manhunt by international assassins.</Text>
           </View>
           <View style={[styles.card , styles.Elevatedcard]}>
        <Image source={{uri:'data:image/jpeg;base64,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' }}
          style={styles.image}
          resizeMode='cover'/>
          <View style={styles.titlecontainer}>
          <Text style={styles.title}>
            Extraction
          </Text>
          <Text style={styles.type}>(Movie)</Text>
          </View>
          <Text style={styles.description}> An Australian black ops mercenary takes on a mission to save an Indian drug lord's kidnapped son in Dhaka, Bangladesh, but the mission goes awry when he is double-crossed.</Text>
           </View>
           <View style={[styles.card , styles.Elevatedcard]}>
        <Image source={{uri:'https://resizing.flixster.com/P3ITKQPm33gw4K73O9DYCOfyZ4E=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQ1Zjg4NDFhLWMxY2EtNDU3NC04OTNmLTQ4MTJiMzc3Y2EwZC5qcGc='}}
          style={styles.image}
          resizeMode='cover'/>
          <View style={styles.titlecontainer}>
          <Text style={styles.title}>
            Damsel
          </Text>
          <Text style={styles.type}>(Movie)</Text>
          </View>
          <Text style={styles.description}>A dutiful damsel agrees to marry a handsome prince, only to find the royal family has recruited her as a sacrifice to repay an ancient debt. Thrown into a cave with a fire-breathing dragon, she must rely on her wits and will to survive. Content collapsed.</Text>
           </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontWeight:'bold',
        fontSize:24,
        padding:8,
        color:'#F4C724'
    },
    card:{
        height:400,
        width:250,
        marginLeft:10,
        borderRadius:20,
        overflow:'hidden',
        backgroundColor:'#000000',
        
    },
    Elevatedcard:{
      elevation:4,
      
      
      
    },
    image:{
      height:300,
      width:'100%',
      borderRadius:20
    },
    title:{
      fontSize:20,
      fontWeight:'bold',
      color:"#ffffff",
      marginStart:7
    },
    type:{
      fontSize:13,
      fontWeight:'bold',
      color:'#ffffff',
      marginTop:5,
      marginStart:6
    },
    titlecontainer:{
      
      flexDirection:'row',

    },
    description:{
      color:'#FFFFFF',
      paddingLeft:6,
      fontSize:10
    }

})
