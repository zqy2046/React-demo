import React from 'react';
import {render} from 'react-dom';

let ele = <h1 className="red">Hello World <span>Hello</span></h1>
render(ele,document.getElementById('root'))




//createElement方法的简单实现;
function ReactElement(type,props) {
  this.type = type;
  this.props = props;
}
function createElement(type,props,...children) {
  if (children.length === 1) children = children[0];
  return new ReactElement(type, {...props,children: children})
}
let myRender = (eleObj,container) => {
  let {props} = eleObj;
  let ele = document.createElement('type');
  for (let key in props) {
    if (key === 'children') {
      //children有可能是数组,也可能只有是一个元素;
      if (typeof props[key] === 'object') {//数组
        props[key].forEach(item => {
          if (typeof item === 'object') {
            myRender(item, ele);
          }else {
            ele.appendChild(document.createTextNode(item));
          }
        })
      } else {//一个
        ele.appendChild(document.createTextNode(props[key]));
      }
    }else if (key === 'className') {
      ele.setAttribute('class',props[key]);
    }else {
      ele.setAttribute('key', props[key]);
    }
  }
  container.appendChild(ele);
}

myRender(createElement(
  "h1",
  { className: "red" ,id:'adf',},
  "Hello World ",
),document.querySelector('#root'))
