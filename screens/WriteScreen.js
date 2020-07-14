import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class WriteScreen extends React.Component{
render(){
    return(
        <View>
        <Text style={Styles.text}>Welcome to WriteScreen</Text>
        </View>
    )
}
}

const Styles = StyleSheet.create({
    text:{
        textAlign:'center',
        color:'red'
    }
})