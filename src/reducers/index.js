//合并多个reducer  返回一个总的reducers

import { combineReducers } from 'redux'
import postReducer from './postReducer'
console.log('测试reducer触发3','执行index reducer');

export default combineReducers({
    state1: postReducer
})