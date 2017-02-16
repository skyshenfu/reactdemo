/**
 * Created by zhangty on 2017/2/16.
 */
import React from 'react';
import {
    Navigator,
    View
}from 'react-native';
import  Home from './Home'
class App extends React.Component{
    render(){
        let name='Home';
        return(
            <View style={{flex: 1}}>
               <Navigator
                   initialRoute={{name:name,component:Home}}
                          configureScene={()=>{
                   return Navigator.SceneConfigs.PushFromRight;
               }}
                renderScene={(router,navigator)=>{
                    let Component=router.component;
                    return(
                        <Component navigator={navigator} router={router} {...router.passProps}/>
                    )
                }}
               />
            </View>
        )
    }
}
export default App;