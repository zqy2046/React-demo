import React from 'react'
import ReactDom from 'react-dom'
import MessageBox from "./components/MessageBox";
import 'bootstrap/dist/css/bootstrap.css'
//值负责渲染;

ReactDom.render(
  <div>
    <MessageBox/>
  </div>
  ,document.querySelector('#root'))