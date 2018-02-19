import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import LoginPage from './LoginPage';
import ChatPage from './ChatPage';
import { loadUsersMessages } from '../actions/messages';
import { loadTimestamp } from '../actions/sockets';

class App extends PureComponent {
  componentDidMount() {
    this.props.loadTimestamp();
    this.props.loadUsersMessages('myAwesomeChatRoom');
  }

  render() {
    const { username, loggedIn, messages, timestamp, error } = this.props;
    return (
      <div>
        <div>
          <p>
            This is the timer value:{' '}
            {moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')}
          </p>
          {error ? <p>{error}</p> : <p>Username: {username}</p>}
        </div>
        <div>
          {!loggedIn ? <LoginPage /> : <ChatPage messages={messages} />}
        </div>
        <div>username: {username}</div>
        <div>loggedIn: {loggedIn.toString()}</div>
        <div>messages: {JSON.stringify(messages)}</div>
      </div>
    );
  }
}
App.defaultProps = {
  error: false,
};

App.propTypes = {
  username: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  messages: PropTypes.array.isRequired,
  loadUsersMessages: PropTypes.func.isRequired,
  timestamp: PropTypes.string.isRequired,
  loadTimestamp: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = ({ login, messages, socket }) => ({
  logger: console.log('login', login),
  username: login.username,
  loggedIn: login.loggedIn,
  error: login.error,
  messages: messages.messages,
  loadUsersMessages: messages.loadUsersMessages,
  timestamp: socket.timestamp,
});

export default connect(mapStateToProps, { loadUsersMessages, loadTimestamp })(
  App
);
