import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const initialState = {};
const middleware = [thunk];

console.log('测试reducer触发4','执行store了');

export const store = createStore(
    rootReducer, 
    initialState, 
    compose(//chrome调试工具redux配置  中间件要写在这里
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
     )