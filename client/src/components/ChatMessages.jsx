import React from 'react';
import ChatMessage from './ChatMessage';


class ChatMessages extends React.Component {
  componentDidUpdate() {
    const messageList = document.getElementById('messageList');
    messageList.scrollTop = messageList.scrollHeight;
  }

  render() {
    const messages = this.props.messages.map((message, i) => {
        return (
          <ChatMessage key={i} username={message.username} message={message.message} fromMe={message.fromMe} />
        );
      });

    return (
      <div id='messageList'>
        { messages }
      </div>
    );
  }
}
export default ChatMessages;