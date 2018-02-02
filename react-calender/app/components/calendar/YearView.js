import React, { Component } from "react";

export default class YearView extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        var ARR = [];
        for (let i = 1 ; i <= 6 ; i++){
            var temp = [];
            for(let j = 0 ; j < 2 ; j++){
                temp.push(
                <td 
                    key={j * 6 + i}
                        onClick={() => { this.props.setMonth(j * 6 + i) ; this.props.setView("month")}}
                >
                    {j * 6 + i}
                    月
                </td>);
            }
            ARR.push(<tr key={i}>{temp}</tr>);
        }

        return <div>
            <table className="yearTable">
                <tbody>
                    {ARR}
                </tbody>
            </table>
        </div>
    }
}