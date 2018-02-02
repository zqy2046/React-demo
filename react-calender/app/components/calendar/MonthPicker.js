import React, { Component } from "react";

export default class MonthPicker extends Component {
    constructor(props) {
        super(props);
 
    }
    
    goNextMonth(){
        if(this.props.month == 12){
            this.props.setYear(this.props.year + 1);
            this.props.setMonth(1);
            
        }else{
            this.props.setMonth(this.props.month + 1);
        }
        
    }

    goPrevMonth() {
        if (this.props.month == 1) {
            this.props.setYear(this.props.year - 1);
            this.props.setMonth(12);

        } else {
            this.props.setMonth(this.props.month - 1);
        }

    }

    render() {
        return <div>
            <h3>
                <button onClick={this.goPrevMonth.bind(this)}>&lt;</button>
                <span>
                    <a
                        href="javascript:void(0);"
                        onClick={() => { this.props.setView("decade") }}
                    >
                        {this.props.year}
                    </a>
                    年
                    <a
                        href="javascript:void(0);"
                        onClick={() => {this.props.setView("year")}}
                    >
                        {this.props.month}
                    </a>
                    月
                </span>
                <button onClick={this.goNextMonth.bind(this)}>
                    &gt;
                </button>
            </h3>
        </div>
    }
}