import React, { Component } from 'react'
import { connect } from 'react-redux'
import { a, fetchPosts } from '../actions/postAction'
import PropTypes from 'prop-types'


    class Posts extends Component {
        // constructor (props) {
        //     super(props) 
        //     this.state = {
        //         posts: []
        //     }
        // } 

      componentDidMount () {//DidMount在生命周期里只执行一次
        //触发action  connect(mapStateToProps, { fetchPosts })(Posts)会把
        //fetchPosts函数绑到this.props下  
        this.props.fetchPosts();
        console.log('执行didMount和fetchPosts一次')
        // this.props.a();
        // fetch('http://jsonplaceholder.typicode.com/posts')
        //     .then(res => {
        //         // let a = res.json();
        //         // console.log(a,res,res.body)
        //         return res.json()//res.json()为resolved状态的promise对象  所以还要再then一次
        //     })
        //     .then(data => {
        //         this.setState({posts: data})
        //         // console.log(data)
        //         // fetch('http://jsonplaceholder.typicode.com/posts')
        //         //     .then(res => {
        //         //         return res.json()
        //         //     })
        //         //     .then(data2 => {
        //         //         let data3 = data.concat(data2)
        //         //         console.log(data3)
        //         //     })
        //     })
            // let fe = fetch('http://jsonplaceholder.typicode.com/posts')
            // console.log(fe);
      }
    //   componentWillReceiveProps (nextProps) {
    //       console.log('props函数执行一次')
    //       if (nextProps.newItem) {
    //         nextProps.newItem.id = nextProps.postItem.length + 1;
    //         nextProps.postItem.unshift(nextProps.newItem);
    //         console.log('有newItem',this.props === nextProps,this.props.postItem === nextProps.postItem)
    //         console.log(nextProps,this.props)
            
    //       }
    //   }

      render() {
          console.log('props',this.props,this.props.newItem,this.props.postItem,this.props.postItem.length)
        const postItems = this.props.postItem.map(post => {
            return (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )
           
        })
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
      }
    }

    PropTypes.propTypes = {
        fetchPosts: PropTypes.func.isRequired,
        posts: PropTypes.array.isRequired
    }
    const mapStateToProps = stateCollection => {
        console.log('测试reducer触发1',stateCollection);
       
       return {//从集合取出当前组件对应的state1 
                                                 //生成对象返回并转成props1  
                                              //stateCollection参数  是所有组件返回的state集合对象
        postItem: stateCollection.state1.items,
        newItem: stateCollection.state1.newItem
        // postItem: state.state2.items
        // postItem: state.state3.items
    }
  }
    // const postItems = this.props.postItem.map(post => {

    // state -->  export default combineReducers({ //返回各组件新state集合stateCollection
    //                                   state1: postReducer
    //                                   state2: post2Reducer
    //                                   state3: post3Reducer
    //                               })
                                // postReducer --> return {//state1  返回单个组件的新state
                                //                   ...state,
                                //                   items: action.payload
                                //                  }
    export default connect(mapStateToProps, { fetchPosts })(Posts)
    // export default Posts
