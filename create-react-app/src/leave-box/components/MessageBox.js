import React,{Component} from 'react'
import MessageList from "./MessageList";
import MessageFooter from "./MessageFooter";
import MessageHeader from "./MessageHeader";

class MessageBox extends Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {id:10001,content:'今天没吃药',author: 'andy',createAt: Date.now()}
      ]
    }
  }
  addMessage = (message) => {
    console.log(message);
    let messageItem = {...message, id: Math.random(),createAt:Date.now()};
    // let messages = [...this.state.messages,messageItem];
    this.setState({
      messages: [
        ...this.state.messages,
        messageItem,
      ]
    })
  }
  render() {
    return(
      <div className='container'>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            {/*头部*/}
            <div className="card card-header">
              <MessageHeader/>
            </div>
            {/*列表*/}
            <div className="card-body">
              <MessageList messages={this.state.messages}/>
            </div>
            {/*底部*/}
            <div className="card-footer">
              <MessageFooter addMessage={this.addMessage.bind(this)}/>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}
export default MessageBox