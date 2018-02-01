import React, { Component } from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

//panel 组件;
class Panel extends Component {
  render() {
    return(
      <div className="container">
        <div className="panel-default panel">
          <Header/>
          <Body/>
        </div>
      </div>
    )
  }
}
class Header extends Component {
  render() {
    return (
      <div className="panel-heading">1</div>
    )
  }
}
class Body extends Component {
  render() {
    return (
      <div className="panel-body">1</div>
    )
  }
}
ReactDom.render(
  <div>
    <Panel/>
  </div>,
  document.querySelector('#root'))