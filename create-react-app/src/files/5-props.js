//1. 属性是外面传进来的,不能更改; 只有状态是属于自己的;
//2. 生命方式有两种, 函数声明, 类声明(有生命周期,状态,this)函数没有;
//3. componentDidMount 渲染完成, componentWillUnmount 将要卸载;

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

//为甚么要继承Component,为了继承其方法;
class School extends Component {
  static propTypes = {//这是ES7语法;
    name: PropTypes.string,
  }
  static defaultProps = {
    name: 'andy',
  }
  constructor(props) {
    super();    //为了继承父类的方法;
    console.log(props);
  }
  render(){     //这个render是定义组件
    return (
      //大括号不能打印对象,可以转为字符串; JSON.stringify();
      <div>
        <h1>
          {Object.keys(this.props)}
        </h1>
      </div>
    )
  }
}

ReactDOM.render(   //这个render是为了将虚拟Dom渲染为真是DOM;
  <School name='中大'/>,
  document.querySelector('#root')
)