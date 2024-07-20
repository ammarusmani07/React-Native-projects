import { View, Text, StyleSheet, Button} from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack' 
import { RootStackParamList } from '../App'

type DetailProps=NativeStackScreenProps<RootStackParamList, 'Details'>
const Details = ({route,navigation}:DetailProps) => {
  const {productId}= route.params
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details:{productId}</Text>
      <Button
      title='back'
      onPress={() => navigation.popToTop()}/>

      
    </View>
  )
}
export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    smallText: {
        color: "#000000"
    }})