import React, {Component} from 'react';

export default class Bar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let {color, value, setColor,} = this.props;
    console.log(this.props);
    return (
      <div>
        <input type="range"
               min={0}
               max={255}
               value={value}
               onChange={(e) => {
                 setColor(color, Number(e.target.value))
               }}/>
        <span style={{display: 'inline-block', width: '50px'}}>
          {value}</span>
        <input type="number"
               min={0}
               max={255}
               value={value}
               onChange={(e) => {
                 value = Number(e.target.value)
                 setColor(color, value)
               }}
               style={{width: '100px'}}/>
      </div>
    );
  }
}

