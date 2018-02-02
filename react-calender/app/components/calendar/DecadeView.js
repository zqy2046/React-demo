import React, { Component } from "react";
import classNames from "classNames";
export default class DecadeView extends Component {
    constructor(props) {
        super(props);

    }

    showTable(){
        const { year, setYear, setView} = this.props;
        //计算开头的第1年
        var start = year - year % 10 - 10;
        //二维DOM数组
        var arr = [];
        for(var i = 0 ; i < 10 ; i++){
            var temp = [];
            for(var j = 0 ; j < 3 ; j++){
                let y = start + j * 10 + i;
                temp.push(
                    <td
                        className={classNames({ "cur":y == year})}
                        onClick={() => { setYear(y); setView("month")}}
                        key = {y}
                    >
                        {y}
                    </td>
                );
            }
            arr.push(<tr key={i}>{temp}</tr>);
        }
        return arr;
    }
    render() {
        return <div>
            <table className='decadeTable'>
                <tbody>
                    {this.showTable()}
                </tbody>
            </table>
        </div>
    }
}