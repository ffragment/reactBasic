import React, { Component } from 'react';
import logo from './logo.svg';
//css文件的引入
import './App.css';
// import app1 from './App.css';

//模块导入导出区别
// import a , {age} from './Person/a'
// import {a} from './Person/a.js'
// import * as all from './Person/a'
// console.log(all);

// const a = require('./Person/a.js')
//以上是关于commonJS和es6模块导入导出的比较  
//以下是redux
import Person from './Person/Person';
import Posts from './components/Posts';
import PostForm from './components/PostForm'
// import Son from './components/Son'

import { Provider } from 'react-redux'
import { store } from './store'


console.log('store',store)
class App extends Component {
    constructor (props) {
        super(props)
        // this.props.len = 2;//只能读  不能写
        // console.log('props',props,this.props === props)
        this.state = {len: 2}

        // -----------------------------------以下redux
    }

    change () {
        let lens = this.state.len + 1;
        this.setState({len: lens})
    }

    // -----------------------------------以下redux
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={this.change.bind(this)} >改变props</button>
                <Person len={this.state.len} />
                
                {/* ---------------------------------- */}
                <hr /><p>以下为redux:</p>
                {/* 以下为redux  这里根标签外层要用<Provider store={store}>包裹住 */}
                <PostForm />
                <Posts />
                {/* <Son /> */}
            </div>
        </Provider >

    );
  }
}
// console.log(new App(),new App().props,new Person())
// console.log(app1,app1.a);
export default App;
