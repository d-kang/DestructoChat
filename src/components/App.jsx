import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginPage from './LoginPage';
import ChatPage from './ChatPage';
import CommentExample from './CommentExample';

class App extends PureComponent {
  render() {
    const { username, loggedIn, messages } = this.props;
    return (
      <div>{!loggedIn ? <LoginPage /> : <ChatPage messages={messages} />}</div>
    );
  }
}

App.propTypes = {
  username: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ login, messages }) => ({
  username: login.username,
  loggedIn: login.loggedIn,
  messages: messages.messages,
});

export default connect(mapStateToProps)(App);
