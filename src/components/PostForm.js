import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, postNew } from '../actions/postAction'
import PropTypes from 'prop-types'
import Son from './Son'

 class PostForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: '1',
            body: '2'
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange (e) {
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit (e) {
        e.preventDefault();
        const newPost = {
            title: this.state.title,
            body: this.state.body
        }
        console.log('post等不等', this.props.postNew)//经过connect处理后  
        //this.props.postNew  和postNew 已经不是同一个函数了
        console.log('post等不等2', postNew)
        this.props.postNew(newPost);
        
    }
    render() {
        const style = {
            border: '1px solid black',
            padding: '10px'
        }
        return (
        <div>
            <h1>添加内容</h1>
            <form onSubmit={this.onSubmit} style={style}>
                <div>
                    <label>title</label>
                    <br/>
                    <input type="text" name="title" value={this.state.title} 
                    onChange={this.onChange} />
                </div>
                <div>
                    <label>body</label>
                    <br/>
                    <textarea name="body" value={this.state.body}  
                    onChange={this.onChange}>
                    </textarea>
                </div>
                <button type="submit">添加</button>
            </form> 
            {console.log('son父级render')}
            <Son />
        </div>
        )
    }
}
export default connect(null,{ postNew })(PostForm)