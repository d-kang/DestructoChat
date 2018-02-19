import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import LoginPage from './LoginPage';
import ChatPage from './ChatPage';
import { setUsername } from '../actions/username';
import { loadUsersMessages } from '../actions/messages';
import { loadTimestamp } from '../actions/sockets';

import socketIO from '../socketConnection';

class App extends PureComponent {
  constructor(props) {
    super(props);

    socketIO.emit('subscribeToTimer', 1000);
  }
  componentDidMount() {
    this.props.loadTimestamp(socketIO);
    this.props.loadUsersMessages('myAwesomeChatRoom');
  }

  render() {
    const {
      username,
      isLoggedIn,
      messages,
      setUsername,
      timestamp,
    } = this.props;
    return (
      <div>
        <div>
          <p>
            This is the timer value:{' '}
            {moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')}
          </p>
        </div>
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
  timestamp: PropTypes.string.isRequired,
  loadTimestamp: PropTypes.func.isRequired,
};

const mapStateToProps = ({ login, messages, socket }) => ({
  username: login.username,
  isLoggedIn: login.isLoggedIn,
  messages: messages.messages,
  loadUsersMessages: messages.loadUsersMessages,
  timestamp: socket.timestamp,
});

const mapDispatchToProps = dispatch => ({
  setUsername: username => dispatch(setUsername(username)),
  loadUsersMessages: chatroom => dispatch(loadUsersMessages(chatroom)),
  loadTimestamp: openSocket => dispatch(loadTimestamp(openSocket)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
