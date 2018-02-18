import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginPage from './LoginPage';
import ChatPage from './ChatPage';
import { setUsername } from '../actions/username';
import { loadUsersMessages } from '../actions/messages';

class App extends PureComponent {
  componentDidMount() {
    this.props.loadUsersMessages('myAwesomeChatRoom');
  }

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
