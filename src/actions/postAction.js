import { FETCH_POSTS, NEW_POST } from './types'

//分发操作
// export function fetchPosts () {
//     console.log(444);
//     return function (dispatch) {
//     console.log(555);
//         fetch('http://jsonplaceholder.typicode.com/posts')
//         .then(res => {
            
//             return res.json()
//         })
//         .then(posts => {
//             dispatch({
//                 type: FETCH_POSTS,
//                 payload: posts
//             })
//         })
//     }
// }

export function a(){
    return function (){
        console.log('打印a')
    }
}
//es6写法
export const fetchPosts = () => dispatch => {
    console.log(555);
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => {
            
            return res.json()
        })
        .then(posts => {
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        })
    }

export const postNew = newPost => dispatch => {
            console.log('打印actionCreator', dispatch)
        fetch('http://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
        .then(res => res.json())
        .then(data => dispatch({
            type: NEW_POST,
            payload: data
        }))
}