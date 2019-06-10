import React from 'react';
import ChatContainer from '../components/ChatContainer';

class ChatBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username
        }
    }

    render() {


        return (
          <ChatContainer username={this.state.username} />
        );
      }
}

export default ChatBox;