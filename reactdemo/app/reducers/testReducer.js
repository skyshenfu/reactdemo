/**
 * Created by zhangty on 2017/2/16.
 */
import * as types from '../constants/actionTypes';
const initialState = {
    isok: true,
};
let testReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.TestInfoOK:
            return {
                ...state,
            }
        case types.TestInfoError:
            return Object.assign({}, state, {
                isok:false
            })
        default:
            return state;
    }
}

export default testReducer;