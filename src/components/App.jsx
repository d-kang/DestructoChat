import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginPage from './LoginPage';
import ChatPage from './ChatPage';
import { setUsername } from '../actions/username';
import { loadUsersMessages } from '../actions/messages';

class App extends PureComponent {
  componentDidMount() {
    // this.messagesControl(data);
    this.props.loadUsersMessages('myAwesomeChatRoom');
  }

  // setUsername = username => {
  //   this.setState({ username, isLoggedIn: true });
  // };

  // setMessages = messages => {
  //   this.setState({ messages });
  // };

  // setTimer = (ms, messageId) => {
  //   const msWithDelay = ms + 5;
  //   this.timer = setTimeout(() => {
  //     this.clearMessage(messageId);
  //   }, msWithDelay);
  // };

  // clearMessage = messageId => {
  //   const { messages } = this.state;
  //   const filteredMsgs = messages.filter((msg, i) => msg.messageId !== messageId);
  //   this.setState({ messages: filteredMsgs }, () => {
  //     console.log('inside clearmessage setState', this.state.messages);
  //     this.messagesControl(this.state.messages);
  //   });
  // };

  // messagesControl = messages => {
  //   let nearestTimeout = null;
  //   let messageId = null;
  //   for (let i = 0; i < messages.length; i += 1) {
  //     const msg = messages[i];
  //     if (msg.selfDestruct) {
  //       const timeLeft = msg.destructAt - Date.now();
  //       if (nearestTimeout === null || timeLeft < nearestTimeout) {
  //         nearestTimeout = timeLeft;
  //         messageId = msg.messageId;
  //       }
  //     }
  //   }
  //   if (nearestTimeout !== null) {
  //     console.log(`timemout happening in ${nearestTimeout} ms`);
  //     this.setTimer(nearestTimeout, messageId);
  //   }
  //   this.setMessages(messages);
  // };

  render() {
    const { username, isLoggedIn, messages, setUsername } = this.props;
    return (
      <div>
        <div>
          {!isLoggedIn ? (
            <LoginPage setUsername={setUsername} />
          ) : (
            <ChatPage messages={messages} />
          )}
        </div>
        <div>username: {username}</div>
        <div>isLoggedIn: {isLoggedIn.toString()}</div>
        <div>messages: {JSON.stringify(messages)}</div>
      </div>
    );
  }
}

App.propTypes = {
  username: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  messages: PropTypes.array.isRequired,
  setUsername: PropTypes.func.isRequired,
  loadUsersMessages: PropTypes.func.isRequired,
};

const mapStateToProps = ({ login, messages }) => ({
  username: login.username,
  isLoggedIn: login.isLoggedIn,
  messages: messages.messages,
  loadUsersMessages: messages.loadUsersMessages,
});

export default connect(mapStateToProps, { setUsername, loadUsersMessages })(
  App
);
