import React ,{ Component }from 'react';

class Message extends Component{
  constructor(){
    super();
    this.state = {
      message : ''
    }
  }
  changeMessage(){
    this.setState({message: "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"})
  }
  render(){
    return (
      <div>
        <p id="para">{this.state.message}</p>
        <button id="click" onClick={()=>{
          this.changeMessage()
        }}>Click Me</button>
      </div>
    )
  }
}

export default Message;