import { StyleSheet,  View, Image } from 'react-native'
import React from 'react'

export default function board() {
  return (
    <View style={styles.Maincont}>
      <Image style={styles.imagecont} source={{uri:'https://t4.ftcdn.net/jpg/03/72/45/57/360_F_372455736_kNN6bMqjeSukoA8Up6x4Fd9etL0J396d.jpg'}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    imagecont:{
 borderWidth:3,
 borderRadius:25,
 borderColor:'blue',
        width:410,
        height:470
    },
    Maincont:{
        marginTop:18,
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    }
})