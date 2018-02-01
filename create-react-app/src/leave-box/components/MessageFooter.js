import React,{Component} from 'react'

class MessageFooter extends Component {
  handleSubmit = (e) => {
    e.preventDefault();//阻止默认事件;
    let message = {
      auth: this.auth.value,
      content: this.content.value,
    }
    this.props.addMessage(message);//调用父组件的方法传值;
  }
  render() {
    return(
      <form action="" className="form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="auth" className='custom-control-label'>留言人:</label>
          <input type="text" id='auth' className='form-control' ref={x=>this.auth=x} required={true}/>
        </div>
        <div className="form-group">
          <label htmlFor="content" className='custom-control-label'>内容:</label>
          <textarea type="text" id='content' rows='10' cols='30' className='form-control' ref={x=>this.content=x} required={true}/>
        </div>
        <div className="form-group">
          <button className='btn btn-info'>留言</button>
        </div>
      </form>
    )
  }
}
export default MessageFooter