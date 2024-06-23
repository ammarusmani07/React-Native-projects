import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export   function FlatCards() {
  return (
  
    <View>
      <Text style={styles.headingText}>Categories</Text>
      <View style={styles.Container}>
        <View style={[styles.Card ,  styles.Cardone]}>
          
              <ImageBackground style={styles.Flatimage} source={{uri:'https://www.pngall.com/wp-content/uploads/14/Old-Tv-PNG-Pic.png'}}>
               
 
                             </ImageBackground>
                             <View style={styles.Tvcont}>
                
               <Text style={styles.boxText}>
                    TV Show
                </Text> 

               </View>
            
        </View>
        <View style={[styles.Card ,  styles.Cardtwo]}>
        <ImageBackground style={styles.Flatimage} source={{uri:'https://static.vecteezy.com/system/resources/previews/010/286/340/non_2x/online-cinema-art-movie-watching-with-popcorn-and-film-strip-cinematograph-concept-png.png'}}>
       
          </ImageBackground>
          <View style={styles.moviecont}>
                
                <Text style={styles.movieText}>
                     Movies
                 </Text> 
 
                </View>
        </View>
        <View style={[styles.Card ,  styles.Cardtwo]}>
        <ImageBackground style={styles.Flatimage} source={{uri:'https://png.pngtree.com/png-clipart/20220116/original/pngtree-linear-cartoon-color-retro-tv-series-png-image_7113201.png'}}>
       
          </ImageBackground>
          <View style={styles.moviecont}>
                
                <Text style={styles.movieText}>
                     Series
                 </Text> 
 
                </View>
        </View>
        <View style={[styles.Card ,  styles.Cardtwo]}>
        <ImageBackground style={styles.Flatimage} source={{uri:'https://cdn-icons-png.flaticon.com/512/7108/7108096.png'}}>
       
          </ImageBackground>
          <View style={styles.moviecont}>
                
                <Text style={styles.movieText}>
                     News
                 </Text> 
 
                </View>
        </View>
        
      </View>
    </View>
   
  )
}

const styles = StyleSheet.create({
     headingText:{
      fontSize: 24,
      fontWeight: "bold",
      paddingHorizontal:8,
      color:'#F4C724'
      
     },
     boxText:{
      fontSize:18,
      color: '#FFFFFF',
      
      flexDirection:'row',
      alignContent:"flex-start",
      fontWeight:'bold'
     },
     movieText:{
      fontSize:20,
      color: '#FFFFFF',
      
      

      fontWeight:'bold'
     },
     Container:{
      flexDirection:'row',
      flex:1,
      padding:8,
      justifyContent:'space-between'
      
    
    
            },
     Card:{
      height:100,
      width: '20%',
     
      margin:3,
      borderRadius:5,
      alignItems:'center'


     },
     Cardone:{
      backgroundColor:'#AE1438'

     },
     Cardtwo:{
      backgroundColor:'#30336B'

     },
     Cardthree:{
      backgroundColor:'#E74292'

     },
     Flatimage:{
      height:60,
      width:60,
      alignItems:'center'
     },
     Tvcont:{
      marginTop:12
     },
     moviecont:{
      marginTop:10
      
     },
     Seriescont:{
      marginTop:10
     },
     Newscont:{
      marginTop:10
     },
    })