import React, {Component} from 'react'
import ReactDom from 'react-dom'

/*
*
*
*
* */







class Counter extends Component {
  static defaultProps = {
    name: '深圳'
  }
  constructor(props) {
    super();
    this.state = {
      num: 100,
    }
    console.log('1.constructor构造');
  }
  componentWillMount() { //取本地的数据,localStorage 是同步方法;渲染之前获取,只获取一次
    localStorage.getItem('a');
    console.log('2 componentWillMount 组件将要加载');
  }
  componentDidMount() {//组件加载完成
    console.log('4. DidMount 组件加载完成');
  }
  handleClick = (num) => {
    this.setState({
      num: this.state.num + num
    })
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    //参数数下一次的属性和状态
    //如果此函数返回false,则不会再调用render方法;
    //如果状态没改,则不调用render,利用此点可以 做 优化
    // react中 PureComponent 组件 可以做优化这件事这个
    // 不能再shouldComponentUpdate,render 中使用setState, ;
    console.log('5. shouldComponentUpdate 组件是否更新')
    return nextState.num !== this.state.num;
  }
  
  componentWillUpdate() {
    console.log('6. componentWillUpdate 组件将要更新')
  }
  componentDidUpdate() {
    console.log('7.componentDidUpdate 组件完成更新')
  }
  
  
  render() {
    console.log('3.父组件 render');
    return (
      <div>
        <p>{this.state.num}</p>
        <ChildCounter num={this.state.num}/>
        <button onClick={()=> {this.handleClick(0)}}>+</button>
        <button onClick={() => {this.handleClick(3)}}>+</button>
      </div>
    )
  }
}


class ChildCounter extends Component {
  componentWillUnmount() {
    console.log('子组件将要卸载');
  }
  componentWillMount() {
    console.log('child componentWillMount');
  }
  componentWillReceiveProps(newProps) {
    //第一次不会走这里, 属性更新时才走这里;;
    console.log('子组件child componentWillReceiveProps ');
  }
  shouldComponentUpdate( nextProps) {
    console.log('子组件 child shouldComponentUpdate');
    return nextProps.num % 2;  //为真是更新;
  }
  render() {
    console.log('child.render');
    return(
      <div>
        {this.props.num}
      </div>
    )
  }
  componentDidMount() {
    console.log('child componentDidMount');
  }
}



ReactDom.render(<Counter/>,document.querySelector('#root'))