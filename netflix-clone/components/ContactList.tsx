import { Image,ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
  const programmerlist = [
    {
        Uid: 1,
        Name: 'REhan Ahmad',
        Status: 'Data Scientist, A great Mentor and inspiring person',
        Imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXP2PaKksa-xXKYGbUDqpR0gDWKO3ba-XW7nmLiCSZv7bS-nL4CDvd2LpHbac9_ptlgYw&usqp=CAU'
    },
    {
        Uid: 2,
        Name: 'Siddique Qureshi',
        Status: 'Software Engineer , Senior Flutter Developer',
        Imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHENoI6e5dIpREJoyNpsQ5U9DfLpHpBqJwsOXfFnzbZQh2f_iaXWC66ABPORO_qCdK2qY&usqp=CAU'
    },
    {
        Uid: 3,
        Name: 'Ahmad Afzal',
        Status: 'Software Engineer, MERN Stack | Machine Learning |  ',
        Imageurl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--rwfbkVgA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x88nwrvshk9eqt61g9bd.png'
    },
    {
        Uid: 4,
        Name: 'Mehar Ali',
        Status: 'UI-Ux Designer, Flutter Developer',
        Imageurl: 'https://img.freepik.com/free-photo/beautiful-office-space-cartoon-style_23-2151043333.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713916800&semt=ais'
    }
];
  return (
    <View>
      <Text style={styles.headingTExt}>ContactList</Text>
      <ScrollView style={styles.scrlcontainer}>
         {programmerlist.map(({ Uid, Name, Status, Imageurl}) => (

                   <View key={Uid} style={styles.cardcont}>
                    <Image source={{uri:Imageurl}} style={styles.imagecont}/>
                  <View>
                    <Text style={styles.name}>{Name}</Text>
                   <Text style={styles.status}>{Status}</Text>

                    </View> 
                  </View>
         ))}

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingTExt:{
    fontSize:24,
    fontWeight:'bold',
    marginTop:12,
    marginLeft:10,
    color:'#F4C724',
  
  borderRadius:30,
  paddingBottom:20
    
  },
  cardcont:{
    borderRadius:10,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginLeft:14,
    marginTop:5,
    backgroundColor:"#BB2CD9",
    width:370
    


  },
  imagecont:{
    width :60,
    height :60,
    borderRadius:100/2,
    marginLeft:4
    
  },
  name:{
    fontSize:15,
    color:'#000000',
    fontWeight:'bold',
    marginLeft:5,
                 
  },
  status:{
    fontSize:11,
    color:'#FFFFFF',
    
    
   
    
    marginLeft:10
  },
  scrlcontainer:{

  }

})