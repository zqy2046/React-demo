import React, {Component} from 'react';
import classNames from 'classnames'

export default class App extends Component {
  //需求：通过文本设置div的属性
  /*
  * ①布局
  * ②refs获取输入框的值，绑定到state
  * ③监听输入框时间
  * */
  constructor() {
    super();
    this.state = {
      width: 300,
      height: 400,
      cu: false,
      xie: true,
      xia: true,
      students: [
        {id: 100001, name: '岳不群'},
        {id: 100002, name: '林平之'},
        {id: 100003, name: '令狐冲'},
        {id: 100004, name: '仍盈盈'},
      ],
      r: 100,
      g: 200,
      b: 100,
      text: ''
    }
  }
  
  setW(e) {
    if (e.keyCode === 13) {
      this.refs.w.blur()
      this.setState({
        width: this.refs.w.value
      })
    }
  }
  
  setH(e) {
    if (e.keyCode === 13) {
      this.refs.h.blur()
      this.setState({
        height: this.refs.h.value,
      })
    }
  }
  
  setStyle(e, k) {
    this.setState({
      [k]: e.target.checked
    })
  }
  
  addStudents(e) {
    if (e.keyCode === 13) {
      var name = e.target.value;
      this.setState({
        students: [
          ...this.state.students,
          //如果数组中有值则在原有基础加1, 为空时 id为 100001;
          {
            id: this.state.students[0]
                ?
                this.state.students.reduce(
                  (a, b) => {
                  return a.id > b.id ? a : b;
                }).id + 1
                :
                100001,
            name
          }
        ]
      })
    }
  }
  
  removeItem(id) {
    this.setState({
      students: this.state.students.filter((item) => {
        return item.id !== id
      })
    })
  }
  
  changeColor(k, e) {
    this.setState({
      [k]: e.target.value
    })
  }
  setText(e) {
    this.setState({
      text: e.target.value,
    })
  }
  
  render() {
    return (
      <div className="main-box">
        <p>
          宽：<input type="text" ref="w" onKeyDown={(e) => {
          this.setW(e)
        }}/>
        </p>
        <p>
          高： <input type="text" ref="h" onKeyDown={(e) => {
          this.setH(e)
        }}/>
        </p>
        <div style={{
          width: this.state.width + 'px',
          height: this.state.height + 'px',
          border: '1px solid #f00',
          background: '#ccc'
        }}></div>
        <div>
          {/*需求: 设置字体*/}
          <p className={classNames({
            cu: this.state.cu,
            xie: this.state.xie,
            xia: this.state.xia,
          })}
          >
            测试字体
          </p>
          <input type="checkbox"
                 checked={this.state.cu}
                 onChange={(e) => {
                   this.setStyle(e, 'cu')
                 }}/>粗 <br/>
          
          <input type="checkbox"
                 checked={this.state.xie}
                 onChange={(e) => {
                   this.setStyle(e, 'xie')
                 }}/>斜 <br/>
          
          <input type="checkbox"
                 checked={this.state.xia}
                 onChange={(e) => {
                   this.setStyle(e, 'xia')
                 }}/>下划线 <br/>
        </div>
        
        
        {/*列表循环,修改,删除*/}
        <div>
          <ul>
            {
              this.state.students.map((item, index) => {
                return (
                  <li key={index}>
                    <span>{item.id}</span>
                    <span>{" "}</span>
                    <span>{item.name}</span>
                    <input type="button" onClick={() => {
                      this.removeItem(item.id)
                    }} value="删除"/>删除
                  </li>
                )
              })
            }
          </ul>
          <div>
            <input type="text" onKeyDown={(e) => {
              this.addStudents(e)
            }}/>增加
          </div>
        </div>
        
        {/*调色板*/}
        <h1>调色板</h1>
        <div style={{
          width: '200px',
          height: '200px',
          backgroundColor: `rgb(${this.state.r},${this.state.g},${this.state.b})`
        }}>
        </div>
        <p>
          r: <input type="range"
                    min={0}
                    max={255}
                    value={this.state.r}
                    onChange={(e) => {
                      this.changeColor('r', e)
                    }}/>{this.state.r}
        </p>
        <p>
          g: <input type="range"
                    min={0}
                    max={255}
                    value={this.state.g}
                    onChange={(e) => {
                      this.changeColor('g', e)
                    }}/>{this.state.g}
        </p>
        <p>
          b: <input type="range"
                    min={0}
                    max={255}
                    value={this.state.b}
                    onChange={(e) => {
                      this.changeColor('b', e)
                    }}/>{this.state.b}
        </p>
        
        
        {/*微博发布框;*/}
        <h1>微博发布</h1>
        <textarea id=""
                  cols="30"
                  onChange={(e) => {this.setText(e)}}
                  rows="10">
        </textarea>
        <span className={classNames({red: this.state.text.length > 140})}>字数:{this.state.text.length}/140</span>
        <button disabled={this.state.text.length > 140 || this.state.text.length ===0}>发布</button>
      </div>
    )
  }
}



