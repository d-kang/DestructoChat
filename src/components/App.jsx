import React, { PureComponent } from 'react';
import LoginPage from './LoginPage';
import ChatPage from './ChatPage';
import data from '../data/mockMessages';

class App extends PureComponent {
  state = {
    isLoggedIn: false,
    username: '',
    messages: [],
  };

  componentDidMount() {
    this.messagesControl(data);
  }

  setUsername = username => {
    this.setState({ username, isLoggedIn: true });
  };

  setMessages = messages => {
    this.setState({ messages });
  };

  setTimer = (ms, messageId) => {
    const msWithDelay = ms + 5;
    this.timer = setTimeout(() => {
      this.clearMessage(messageId);
    }, msWithDelay);
  };

  clearMessage = messageId => {
    const { messages } = this.state;
    const filteredMsgs = messages.filter((msg, i) => msg.messageId !== messageId);
    this.setState({ messages: filteredMsgs }, () => {
      console.log('inside clearmessage setState', this.state.messages);
      this.messagesControl(this.state.messages);
    });
  };

  messagesControl = messages => {
    let nearestTimeout = null;
    let messageId = null;
    for (let i = 0; i < messages.length; i += 1) {
      const msg = messages[i];
      if (msg.selfDestruct) {
        const timeLeft = msg.destructAt - Date.now();
        if (nearestTimeout === null || timeLeft < nearestTimeout) {
          nearestTimeout = timeLeft;
          messageId = msg.messageId;
        }
      }
    }
    if (nearestTimeout !== null) {
      console.log(`timemout happening in ${nearestTimeout} ms`);
      this.setTimer(nearestTimeout, messageId);
    }
    this.setMessages(messages);
  };

  render() {
    const { isLoggedIn, messages } = this.state;
    return (
      <div>
        <div>{!isLoggedIn ? <LoginPage setUsername={this.setUsername} /> : <ChatPage messages={messages} />}</div>
      </div>
    );
  }
}

export default App;
