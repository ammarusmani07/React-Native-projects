import { Image, StyleSheet, Text, View,Linking,TouchableOpacity } from 'react-native'
import React from 'react'

export  function Touchableabout() {
   function openWebsite(websiteLink :string){
       Linking.openURL(websiteLink)
   }
   
  return (
    <View>
      <View style={
        styles.headingcontainer
      }>
      <Text style={styles.headingtext}>About Developer</Text>
    </View>
    <View style={[styles.card, styles.elevatedcard]}><Image style={styles.imageContainer} source={{uri:'data:image/jpeg;base64,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'}}/>
     <View>
      <Text style={styles.nametitle}>Ammar usmnani</Text>
     </View>
     <View style={styles.descontain}>
      <Text style={styles.description} numberOfLines={4}>
      React Native developer with a strong foundation in mobile development, bringing experience with native languages (Java, Kotlin) and cross-platform frameworks (Flutter). Proven ability to deliver high-quality, performant mobile applications using JavaScript and React Native. Eager to 
      leverage existing knowledge of Android development and cross-platform app creation to build exceptional user experiences.
</Text>
<View style={styles.linkcontainer}>
       <TouchableOpacity  style={styles.Touchablecont} onPress={()=> {openWebsite('https://www.linkedin.com/in/ammar-usmani-%F0%9F%8C%9F-flutter-developer-99541b289/')}}>
        <Text style={styles.Linkcont}>Linkendin</Text>
        
        </TouchableOpacity >   
        <TouchableOpacity style={styles.Touchablecont} onPress={()=> {openWebsite('https://github.com/ammarusmani1')}}>
        <Text style={styles.Linkcont}>Github</Text>
        
        </TouchableOpacity>   
        <TouchableOpacity style={styles.Touchablecont}onPress={()=> {openWebsite('https://www.instagram.com/ammarcodes/')}}>
        <Text style={styles.Linkcont}>Instagram</Text>
        </TouchableOpacity>     
            

     </View>
     

     </View>
     </View>
     
      
    </View>
    
  )
}

const styles = StyleSheet.create({
  headingtext:{
    fontSize:22,
    fontWeight:'bold',
    margin:8,
    color:'#F4C724'
  },
  headingcontainer:{
    flexDirection:'row'
  }, 
  card:{
    height:470,
    width:400,
    borderRadius:20,
    marginLeft:7
    
  },
  elevatedcard:{
    elevation:4,
    backgroundColor:'#000000'
  },
  imageContainer:{
    width:300,
    height:300,
    borderRadius:200,
    marginLeft:50,
    marginTop:10
    
  },
  nametitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'#FFFFFF',
        textAlign:'center'
        
        
  },
  description:{
    color:'#FFFFFF',
    fontWeight:'bold'

  },
  namecontainer:{
    flexDirection:'row',
    
  }, 
  descontain:{
    margin:10
  },
  Linkcont:{
    fontWeight:'bold',
    color:'#0A79DF',
    fontSize:17,
    textAlign:'center',
    marginTop:4

    
  },
  linkcontainer:{
    alignItems:'center',
    marginTop:15,
    flexDirection:'row',
    justifyContent:'center',
   
  },
  Touchablecont:{
    backgroundColor:'#FFFFFF',
    borderRadius:3,
    marginRight:9,
    height:30,
    width:100
    
  }
  
})