import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    useColorScheme
} from 'react-native';

function Newapp(): JSX.Element{
    const darkMode = useColorScheme() === 'dark';
     

    
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={styles.container}>
                    <Text style={darkMode ? styles.darkTxt : styles.whiteTxt}>
                        React Native
                    </Text>
                </View>
            </SafeAreaView>
        );
        
    
}

const styles= StyleSheet.create({
    container: {
        flex : 1,
        alignItems : 'center',
        justifyContent:'center'
    },
    whiteTxt: {
        color:'#FFFFFF'
    },
    darkTxt: {
        color:'#000000'
    }
});

export default Newapp;

