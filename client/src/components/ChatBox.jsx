import React from 'react';
import ChatContainer from '../components/ChatContainer';

class ChatBox extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            submitted: false
        }
    }

    onChangeUsername = (event) => {
      let value = event.target.value;
        this.setState({ 
          username: value
        });

    }
    onSubmitUsername = (event) => {
        event.preventDefault();
        this.setState({ 
          submitted: true, 
          username: this.state.username 
        });
    }

    render() {
        if (this.state.submitted) {
            return (
              <ChatContainer username={this.state.username} />
            );
          }

        return (
          <form onSubmit={this.onSubmitUsername}>
            <div>
              <input type="text" onChange={this.onChangeUsername} placeholder="Username" required />
            </div>
            <input type="submit"/>
          </form>
        );
      }
}

export default ChatBox;