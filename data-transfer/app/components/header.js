import React, {Component} from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let { text, add, minus } = this.props;
    return (
      <div>
        <button
          onClick={minus}
        >-</button>
        <div className="vie">
          {text}
        </div>
        <button
          onClick={add}
        >+</button>
      </div>
    );
  }
}

