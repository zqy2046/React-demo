import React, {Component} from 'react'

class MessageList extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.messages.map((item,index) => {
          return(
            <li className='list-group-item' key={index}>
              留言人: {item.author} 内容: {item.content}
              <span className="pull-right">
                事件:{new Date(item.createAt).toLocaleString()}
              </span>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default MessageList