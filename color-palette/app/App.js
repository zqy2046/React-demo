import React, {Component} from 'react';
import Bar from './components/Bar';

/*受控组件与非受控组件中,受控组件中数据是组件管理;
* 非受控组件中,是DOM元素自身管理;
* 一个组件只有有表单元素才说得上是受控组件货非受控组件
*
* 受控组件中所有表单元素都与组件state绑定,使用 onChange和value模拟双向绑定;
* 父子组件间数据传递;字组件想改变父组件的值,可以通过父组件传递一个函数给字组件实现;
* */

class App extends Component {
  constructor() {
    super();
    this.state = {
      r: 100,
      g: 100,
      b: 100
    }
  }
  
  
  setColor(color,value) {
    this.setState({
      [color]: value
    })
  }
  
  render() {
    let {r, g, b} = this.state;
    return (
      <div>
        <h1>组件版调色板</h1>
        {/**/}
        <div className="view"
             style={{
               width: '200px',
               height: '200px',
               backgroundColor: `rgb(${r},${g},${b})`
             }}
        ></div>
        <Bar color='r'
             value={r}
             setColor={this.setColor.bind(this)}>
        </Bar>
        <Bar color='g'
             value={g}
             setColor={this.setColor.bind(this)}>
        </Bar>
        <Bar color='b'
             value={b}
             setColor={this.setColor.bind(this)}>
        </Bar>
      </div>
    );
  }
}

export default App;
