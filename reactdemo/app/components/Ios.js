/**
 * Created by zhangty on 2017/2/16.
 */
import React from 'react';
import {
    Text, View, TouchableHighlight, StyleSheet
} from 'react-native';
class Ios extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.bg}>
                <Text style={styles.font}>Ios</Text>
            </View>
        )

    }
}
const styles=StyleSheet.create(
    {
        bg:{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:"#ffffff"
        },
        font: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        }
    }
)
export default Ios;