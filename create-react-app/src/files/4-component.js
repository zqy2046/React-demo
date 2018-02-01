import React from 'react'
import ReactDOM from 'react-dom'

//1. 组件优点: 可复用, 可组合, 易维护
//2. react 组件生命方式 函数式, 类
//3. react 如何区分组件与JSX? 组件名大写开头
//4. react可以和jsx混用;
//5. 可以通过属性给组件传值 props;


let school = {name: '中大', age: 100};

function Build() {
  return <p>{school.name} </p>
}

ReactDOM.render(
  <div>
    <Build/>
    <Build/>
  </div>, document.querySelector('#root'));