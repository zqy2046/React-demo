import React, {Component} from 'react';

export default class GoodsItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let {item,setAmount} = this.props;
    return(
      <div className="goodsItem" style={{width:'100%',height: '50px'}}>
        <span className="id cell">{item.id}</span>
        <span className="name cell">{item.name}</span>
        <span className="price cell">{item.price}</span>
        <span className="amount cell">
          <button onClick={() => {setAmount(item.id,item.amount -1)}}>-</button>
            {item.amount}
          <button onClick={() => {setAmount(item.id,item.amount +1)}}>+</button>
        </span>
        <span className='cell'>
          {item.amount * item.price} 元
        </span>
      </div>
    )
    
  }
}

