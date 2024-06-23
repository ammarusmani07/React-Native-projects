import React from 'react'
import { PropsWithChildren } from 'react'
import { StyleSheet, View,Text } from 'react-native';

type CurrencybuttonProp =PropsWithChildren<{
    flag:string;
    name:string;
    
}>
const CurrencyButton = (props: CurrencybuttonProp): JSX.Element => {
return(
    <View style={styles.buttonContainer}>
    <Text style={styles.flag}>{props.flag}</Text>
    <Text style={styles.country}>{props.name}</Text>
</View>
)
}

const styles = StyleSheet.create({
buttonContainer : {
alignItems: 'center',
color:'white'
},
flag: {
fontSize: 28,
color: "#FFFFFF",
marginBottom: 2
},
country: {
fontSize: 12,
color: "red",
marginBottom:3

}
})
export default CurrencyButton;