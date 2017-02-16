/**
 * Created by zhangty on 2017/2/16.
 */
import React, { Component } from 'react';
import  {Provider} from 'react-redux';
import App from './components/App';
import store from  './store/store';
export default class reactdemo extends Component {
    render() {
        return (
         <Provider store={store}>
         <App/>
         </Provider>
        );
    }
}

