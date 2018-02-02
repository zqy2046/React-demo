import React, {Component} from "react";
import classNames from "classnames";

export default class MonthView extends Component {
  constructor(props) {
    super(props);
    
  }
  showTable() {
    const {year, month} = this.props;
    //日历三要素
    //1，本月1号星期几
    var currentMonthWeekDay = (new Date(year, month - 1, 1)).getDay();
    //2，本月共几天，即下个月1号减去1毫秒所在的天
    var currentMonthDays = (new Date((new Date(year, month, 1) - 1))).getDate();
    //3，上个月共几天，即本月1号减去1毫秒所在的天
    var lastMonthDays = (new Date((new Date(year, month - 1, 1) - 1))).getDate();
    
    //一维数组
    //上个月
    var arr = [];
    for (let i = 0; i < currentMonthWeekDay; i++) {
      arr.unshift({
        "type": "S",
        "d": lastMonthDays - i
      });
    }
    //本月
    for (let i = 1; i <= currentMonthDays; i++) {
      arr.push({
        "type": "D",
        "d": i
      });
    }
    //下个月
    var count = 1;
    while (arr.length != 35 && arr.length != 42) {
      arr.push({
        "type": "X",
        "d": count++
      });
    }
    
    //生成二维数组
    var ARR = [];
    for (let i = 0; i < arr.length / 7; i++) {
      let temp = [];
      for (var j = 0; j < 7; j++) {
        let o = arr[i * 7 + j];
        temp.push(
          <td
            key={i * 7 + j}
            onClick={() => {
              if (o.type == "D") {
                this.props.setDay(o.d)
              }
            }}
            className={classNames({"hui": o.type == "S" || o.type == "X"})}
          >
            {o.d}
          </td>);
      }
      ARR.push(<tr key={i}>{temp}</tr>);
    }
    
    return ARR;
  }
  
  render() {
    return <div>
      <table>
        <tbody>
        {this.showTable()}
        </tbody>
      </table>
    </div>
  }
}