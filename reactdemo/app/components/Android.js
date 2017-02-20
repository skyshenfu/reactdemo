/**
 * Created by zhangty on 2017/2/16.
 */
import React from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet
} from 'react-native';
import Head from './Head';
import AndroidDetail from  './AndroidDetail'
class Android extends React.Component{
    constructor(props){
        super(props);
        console.log("Android");
    }
    render(){
        const {navigator}=this.props;
        return(
            <View style={styles.bg}>
                <Head title={'Android'} headtype={"navicon"} />
                <View>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={styles.touchjump}
                        onPress={this.click1.bind(this)}
                    >
                        <Text style={{color: 'gray', fontSize: 12}}>click</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    click1(){
        const {navigator}=this.props;
        navigator.push({
            name:'AndroidDetail',
            component :AndroidDetail
        })
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
            height:30,
            margin: 10,
        }
    }
)
export default Android;