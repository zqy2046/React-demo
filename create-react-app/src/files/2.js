import React from 'react';
import ReactDOM from 'react-dom'

let lessons = [
  {name: 'Vue', price: 800},
  {name: 'React', price: 1000},
];
function toLesson (item) {
  return `当前商品是${item.name},价格是${item.price}`
}
//null在react中也是一个合法的元素,表示不存在;
let ele = (
  <ul>
    {lessons.map((item,index) => (
      item.price < 1000
        ?
        null
        :
      <li key={index}>{toLesson(item)}</li>
    ))}
  </ul>
)
ReactDOM.render(ele,document.querySelector('#root'))