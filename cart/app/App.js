import React, {Component} from 'react';
import GoodsItem from './components/GoodsItem';

/*购物车
* */

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      goods: [
        {id: 10001, name: 'Mac-air', price: 6000, amount: 1},
        {id: 10002, name: 'Mac-pro', price: 5000, amount: 1},
        {id: 10003, name: 'Mac-book', price: 7000, amount: 1},
        {id: 10004, name: 'Mac', price: 6000, amount: 1}
      ]
    }
  }
  
  //计算总价格
  getTotal() {
    /* 可用forEach
    let total = 0;
    this.state.goods.forEach(item => {
      total += item.price * item.amount;
    })
    return total;
    */
    /*方法二: reduce;
     *reduce(arr.reduce(callback[, initialValue]),callback有4个参数;
     *reduce方法使用注意,callback第一个参数是每次返回的值(第一次迭代默认是数组第一项可在reduce函数的第二个参数指定),第二个参数是当前处理的项
    * */
    /*错误写法:
    * var arr = this.state.goods;
    let total = arr.reduce((prev,next,index,arr) => {
      return prev.price * next.amount + next.price * next.amount;
    },0)
    */
    var arr = this.state.goods;
    let total = arr.reduce((prev,next) => {
      return prev + next.price * next.amount;
    },0)
    return total;
  }
  setAmount(id, amount) {
    this.setState({
      goods: this.state.goods.map(item => {
        if (item.id !== id) return item;
        return {
          ...item,
          amount,
        }
      })
    })
  }
  deleteItem(id) {
    this.setState({
      goods: this.state.goods.filter(item => {
        return item.id !== id;
      })
    })
  }
  
  render() {
    let goods = this.state.goods;
    return (
      <div className='cart'>
        <div className='cart-header'>
          {Object.keys(goods[0]).concat('Total').map((item,i) => {
            return <span className='cell' key={i}>{item}</span>
          })}
        </div>
        {
          goods.map((goodsItem, i) => {
            return (
              <GoodsItem item={goodsItem}
                         deleteItem={this.deleteItem.bind(this)}
                         setAmount={this.setAmount.bind(this)}
                         key={i}/>
            )
          })
        }
        <div className="total">共计:{this.getTotal()} 元</div>
      </div>
    )
  }
}

export default ShoppingCart;
