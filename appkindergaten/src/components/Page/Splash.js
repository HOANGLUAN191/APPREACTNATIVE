/**
 * Tran Hoang Luan
 * 
 */



import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';



class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>

                </Text>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    },
    title: {
        fontWeight:'hold',
        fontSize:18
    }
})
export default Splash;
