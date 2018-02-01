import React, {Component} from 'react';

export default class GoodsItem extends Component {
  constructor(props) {
    super(props)
  }
  handleClick(item,deleteItem,setAmount) {
    if (item.amount === 1) {
      if (confirm(`确定要删除${item.name}吗?`)) {
        deleteItem(item.id)
        return;
      }
    }
    setAmount(item.id,item.amount-1)
  }
  render() {
    let {item,setAmount,deleteItem} = this.props;
    return(
      <div className="goodsItem" style={{width:'100%',height: '50px'}}>
        <span className="id cell">{item.id}</span>
        <span className="name cell">{item.name}</span>
        <span className="price cell">{item.price}</span>
        <span className="amount cell">
          <button onClick={() => {this.handleClick(item,deleteItem,setAmount)}}>-</button>
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

