import { FETCH_POSTS, NEW_POST } from '../actions/types'

//返回新的状态

const initialState = {
    items: [],
    newItem: {id: 101,title: 'dona'}
}

export default function (state=initialState, action) {
    console.log('测试reducer触发2','执行reducer了并返回新state');

    console.log(222)
    console.log('state',state)
    console.log('action',action.type,action.payload)
    switch (action.type) {
        case FETCH_POSTS: 
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                newItem: action.payload
            };
        default: 
            return state;
    }
}
