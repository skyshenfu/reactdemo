/**
 * Created by zhangty on 2017/2/16.
 */
import React from 'react';
import {
    Text, View, TouchableHighlight, StyleSheet
} from 'react-native';
import Head from './Head';
class Windows extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.bg}>
                <Head title={'Windows'}/>
            </View>
        )

    }
}
const styles=StyleSheet.create(
    {
        bg:{
            flex:1,
            flexDirection:'column',
            alignItems: 'center',
            backgroundColor:"#ffffff"
        },
        font:{
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        }
    }
)
export default Windows;