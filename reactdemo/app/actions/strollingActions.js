/**
 * Created by ljunb on 16/5/25.
 */
import * as types from './actionTypes';
export let good = ()=> {
    // http://food.boohee.com/fb/v1/home/banners?app_device=Android&app_version=2.2&channel=boohee&user_key=6d5b5520-df45-448b-93fe-58b6a62db7f3&token=G7ccLmyGSqpJkZvSkzEd&phone_model=H60-L11&os_version=4.4.2
    
    return dispatch => {
        // 请求轮播数据
        dispatch(good1());
    }
}

let good1 = ()=> {
    return {
        type: types.TestInfoOK
    }
}

