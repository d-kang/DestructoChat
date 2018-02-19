import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginPage from './LoginPage';
import ChatPage from './ChatPage';

class App extends PureComponent {
  componentDidMount() {}

  render() {
    const { username, loggedIn, messages, error } = this.props;
    return (
      <div>
        <div>
          {username ? <p>{`Username: ${username}`}</p> : <p>{error}</p>}
        </div>
        <div>
          {!loggedIn ? <LoginPage /> : <ChatPage messages={messages} />}
        </div>
      </div>
    );
  }
}
App.defaultProps = {
  error: '',
};

App.propTypes = {
  username: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  messages: PropTypes.array.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = ({ login, messages, socket }) => ({
  logger: console.log('login', login),
  username: login.username,
  loggedIn: login.loggedIn,
  error: login.error,
  messages: messages.messages,
});

export default connect(mapStateToProps)(App);
