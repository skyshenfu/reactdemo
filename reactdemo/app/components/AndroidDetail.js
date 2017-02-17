/**
 * Created by zhangty on 2017/2/16.
 */
import React from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet
} from 'react-native';
import Head from './Head';
class AndroidDetail extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.bg}>
                <Head title={'AndroidDetail'}/>
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.touchjump}
                    onPress={this.click1.bind(this)}
                >
                    <Text style={{color: 'gray', fontSize: 12}}>back</Text>
                </TouchableOpacity>
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
        },
        touchjump:{
            height:30
        }
    }
)
export default AndroidDetail;
