import React, {Component} from "react";
import Calendar from "./components/calendar/Calendar.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "birthday": "未选择",
      "jiehun": "未选择",
      "showBirthdayBox": false,
      "showJiehunBox": false
    }
  }
  
  //回调函数
  callback(y, m, d) {
    this.setState({
      "birthday": y + "年" + m + "月" + d + "日",
      "showBirthdayBox": false
    });
  }
  
  callback2(y, m, d) {
    this.setState({
      "jiehun": y + "年" + m + "月" + d + "日",
      "showJiehunBox": false
    });
  }
  
  render() {
    return <div>
      <div>
        姓名：
        <input type="text"/>
      </div>
      <br/>
      <div>
        性别
        <input type="radio"/> 男
        <input type="radio"/> 女
      </div>
      <br/>
      <div className="cboxdiv">
        出生日期：
        <input type="text" readOnly onClick={() => {
          this.setState({"showBirthdayBox": true});
        }} value={this.state.birthday}/>
        <div className="cbox" style={{"display": this.state.showBirthdayBox ? "block" : "none"}}>
          <Calendar callback={this.callback.bind(this)}/>
        </div>
      </div>
      <br/>
      <div className="cboxdiv">
        结婚日期：
        <input type="text" readOnly onClick={() => {
          this.setState({"showJiehunBox": true});
        }} value={this.state.jiehun}/>
        <div className="cbox" style={{"display": this.state.showJiehunBox ? "block" : "none"}}>
          <Calendar callback={this.callback2.bind(this)}/>
        </div>
      </div>
    </div>
  }
}