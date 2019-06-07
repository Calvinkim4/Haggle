import React from 'react';
import ChatMessage from './ChatMessage';


class ChatMessages extends React.Component {
  componentDidUpdate() {
    const messageList = document.getElementById('message-list');
    messageList.scrollTop = messageList.scrollHeight;
  }

  render() {
    const messages = this.props.messages.map((message, i) => {
        return (
          <ChatMessage key={i} username={message.username} message={message.message} fromMe={message.fromMe} />
        );
      });

    return (
      <div id='message-list' className='message-list' >
        { messages }
      </div>
    );
  }
}
export default ChatMessages;