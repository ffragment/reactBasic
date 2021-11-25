import React from 'react'
import Son from './Son'
class Person extends React.Component {
    constructor (props,context) {
        super(props) 
        this.state = {
                      title: 'dl',
                      val: 'love you'
                    };
        // console.log(props,context)
    }
   

    state = {
        title: 'dona',
        val: 'dona love you',
        age: 9
    }
    //上面这种写法能正常执行 前面不用带this 当不写constructor可以用  
    //如果二者同时存在  以constructor里的为准
    //并且对于props是内部自动传的  不写constructor传props下面依然能用this.props
    add () {

    }
    //装了es7插件才支持下面的写法  并且上面的是加在实例原型上  下面的是在实例上
    remove = () => {

    }
    componentWillReceiveProps (nextProps) {
        // console.log(nextProps === this.props,typeof nextProps,this.props)
        // console.log( new Person())
    
    }
    // shouldComponentUpdate (nextProps,nextState) {
    //     // console.log(nextProps === this.props,nextState === this.state)
    //     // // // if (nextState === this.state) {
    //     // //     if(nextProps !== this.props) {
    //     // //     return false
    //     // // }
  
    // }
    change (e) {
       this.setState({val: e.target.value})
    }
    render () {
        return ([
            <div key="1">
                <form onSubmit={this.onSubmit} >
                    <div title={this.state.title}></div>

                    <input type="text" value={this.state.val}  
                    onChange={this.change.bind(this)} />   {this.state.val}

                    <div>{this.props.len}</div>
                    {/* <Son length={this.props.len}  /> */}
                    {/* <Son length={this.props.len} /> */}
                </form>
                
            </div>,
                // <Son length={this.props.len} />,
                // <Son length={this.props.len} />,
                <Son length={this.props.len} key="3" />

         ] )
    }
}
// console.log( new Person())
export default Person
