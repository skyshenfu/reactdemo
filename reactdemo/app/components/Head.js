/**
 * Created by zhangty on 2017/2/16.
 */
import React from 'react';
import {
    Text, View, StyleSheet, Dimensions
} from 'react-native';
import {redColor} from '../constants/Constants'
class Head extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.size}>
                <Text style={styles.font}>{this.props.title}</Text>
            </View>
        )

    }
}
const styles=StyleSheet.create(
    {
        size:{
            flexDirection:'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:redColor,
            height:Dimensions.get('window').height*0.06,
            width:Dimensions.get('window').width
            },

        font: {
                color:'white',
                fontSize: 16,
                textAlign: 'center',
                margin: 10,
            }

    }
)
export default Head;