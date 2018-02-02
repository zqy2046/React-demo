import React, {Component} from "react";

export default class YearPicker extends Component {
  constructor(props) {
    super(props);
  }
  
  goPrev10Year() {
    this.props.setYear(this.props.year - 10);
  }
  
  goNext10Year() {
    this.props.setYear(this.props.year + 10);
  }
  
  render() {
    return <div>
      <h3>
        <button onClick={this.goPrev10Year.bind(this)}>前10年</button>
        <span>
          <a
            href="javascript:void(0);"
            onClick={() => {
              this.props.setView("decade")
            }}
          >
            {this.props.year}
            </a>
          年
        </span>
        <button onClick={this.goNext10Year.bind(this)}>
          后10年
        </button>
      </h3>
    </div>
  }
}