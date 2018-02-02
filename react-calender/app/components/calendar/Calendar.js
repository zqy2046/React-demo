import React, { Component } from "react";
import MonthView from "./MonthView.js";
import DecadeView from "./DecadeView.js";
import YearView from "./YearView.js";
import MonthPicker from './MonthPicker.js';
import YearPicker from './YearPicker.js';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year : (new Date()).getFullYear() ,
            month: (new Date()).getMonth() + 1 ,
            view : "month" ,
            day: (new Date()).getDate()
        }
    }

    //设置年
    setYear(year){
        this.setState({year});
    }

    //设置月
    setMonth(month) {
        this.setState({ month });
    }

    //设置view
    setView(view) {
        this.setState({ view });
    }

    //选择了日子
    setDay(day){
        this.setState({day});
        this.props.callback(this.state.year , this.state.month , day);
    }

    //呈递view
    showView(){
        switch(this.state.view){
            case "month" :
                return <MonthView year={this.state.year} month={this.state.month} setDay={this.setDay.bind(this)} day={this.state.day}/> ;
            case "decade" :
                return <DecadeView year={this.state.year} setYear={this.setYear.bind(this)} setView={this.setView.bind(this)}/>;
            case "year":
                return <YearView month={this.state.month} setMonth={this.setMonth.bind(this)} setView={this.setView.bind(this)} />;
        }
    }

    //呈递picker
    showPicker() {
        switch (this.state.view) {
            case "month":
                return <MonthPicker
                    year={this.state.year}
                    month={this.state.month}
                    setView={this.setView.bind(this)}
                    setYear={this.setYear.bind(this)}
                    setMonth={this.setMonth.bind(this)}
                />;
            case "decade":
                return <YearPicker
                    year={this.state.year}
                    setView={this.setView.bind(this)}
                    setYear={this.setYear.bind(this)}
                />;
            case "year":
                return <h3>请选择月份</h3>
        }
    }

    render() {
        return <div>
            {
                this.showPicker()
            }
            
            {
                this.showView()
            }
        </div>
    }
}