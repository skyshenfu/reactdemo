/**
 * Created by zhangty on 2017/2/16.
 */
import React from 'react';
import {
    Text, View, StyleSheet, Dimensions, Platform,TouchableOpacity
} from 'react-native';
import {redColor} from '../constants/Constants'
import Icon from 'react-native-vector-icons/FontAwesome';
class Head extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let icontype=this.props.headtype;
        return(
            <View style={styles.size}>
                <TouchableOpacity
                    style={styles.leftstyle}
                    activeOpacity={0.75}
                    onPress={this.props.callbackParent}
                >
                    <Icon name={icontype} size={26} color={'white'}/>
                </TouchableOpacity>
                <Text style={styles.font}>{this.props.title}</Text>
            </View>
        )

    }
    click1(){
        const {navigator}=this.props;
        navigator.pop();
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
            width:Dimensions.get('window').width,
            marginTop:Platform.OS=='ios'?20:0
            },
        leftstyle:{
            position:'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            left:0,
            width:36,
            height:36,
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