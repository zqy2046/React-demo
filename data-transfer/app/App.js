import React, {Component} from 'react';
import Header from './components/header';

/*受控组件与非受控组件中,受控组件中数据是组件管理;
* 非受控组件中,是DOM元素自身管理;
* 一个组件只有有表单元素才说得上是受控组件货非受控组件
*
* 受控组件中所有表单元素都与组件state绑定,使用 onChange和value模拟双向绑定;
*
* 父子组件间数据传递;
* */


class App extends Component {
  constructor() {
    super();
    this.state = {
      text: 100
    }
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickMinus = this.handleClickMinus.bind(this);
  }
  handleClickAdd() {
    this.setState({
      text: this.state.text + 10
    })
  }
  handleClickMinus() {
    this.setState({
      text: this.state.text - 10
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClickAdd}>父组件按钮</button>
        <Header
          add={this.handleClickAdd}
          minus={this.handleClickMinus}
          text={this.state.text} />
      </div>
    );
  }
}

export default App;
