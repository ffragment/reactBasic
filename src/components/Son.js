import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Son extends Component {
  render() {

    console.log('son执行')
    return (
      <div>
          <h3>{this.props.newItem.id}{this.props.newItem.title}</h3>
      </div>
    )
  }
}
const mapStateToProps = stateCollection => {
    console.log('测试reducer触发5',stateCollection);
   return {//从集合取出当前组件对应的state1 
                                             //生成对象返回并转成props1  
                                          //stateCollection参数  是所有组件返回的state集合对象
    postItem: stateCollection.state1.items,
    newItem: stateCollection.state1.newItem
   
}
}
export default connect(mapStateToProps, null)(Son)