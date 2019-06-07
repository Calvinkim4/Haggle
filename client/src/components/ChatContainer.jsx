import React from 'react';
import ChatMessages from './ChatMessages';
import ChatSend from './ChatSend';
import io from 'socket.io-client';

const url = 'http://localhost:3001'

class ChatContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            messages: [] 
        };
        this.socket = io(url).connect();
        this.socket = io(url, { query: `username=${props.username}` }).connect();

    this.socket.on('server:message', message => {
      this.addMessage(message);
    });
    }

    sendMessage = (message) => {
        const messageObject = {
          username: this.props.username,
          message
        };
    
        this.socket.emit('client:message', messageObject);
    
        messageObject.fromMe = true;
        this.addMessage(messageObject);
      }
    
      addMessage = (message) => {
        const messages = this.state.messages;
        messages.push(message);
        this.setState({ 
            messages 
        });
      }

    render() {
        return (
          <div className='chat-container'>
            <ChatMessages messages={this.state.messages} />
            <ChatSend onSend={this.sendMessage} />
          </div>
        );
    }
}

export default ChatContainer;