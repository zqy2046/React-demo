import React from 'react'
import ReactDOM from 'react-dom'

//1.jsx中普通属性和 html中一样;
//2.有几个特殊属性需要改变写法: class  ---> className;  for  ---> htmlFor;
//3. style 需要写对象格式: style={{attr: value}},属性名需要驼峰命名;
//4. 危险的插入innerHTML,xss攻击;

let str = '<h1>纯标签</h1>'

let style = {width: '200px',backgroundColor:'#000',color:'#fff'}
ReactDOM.render(
  <div>
    <h1>Hello World!!</h1>
    <span style={style}></span>
    <div dangerouslySetInnerHTML={{__html:str}}></div>
  </div>
  ,document.querySelector('#root')
)