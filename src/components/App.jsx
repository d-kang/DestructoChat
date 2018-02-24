import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginPage from './LoginPage';
import ChatContainer from './ChatContainer';
import { loadUsersMessages } from '../actions/messages';
import { loginUserSuccess } from '../actions/login';

class App extends PureComponent {
  componentDidMount() {
    const username = window.localStorage.getItem('username');
    if (username !== null) {
      this.props.loginUserSuccess(username);
      this.props.loadMessages();
    }
  }

  logout = () => {
    window.localStorage.removeItem('username');
    window.location.reload();
  };
  render() {
    const { loggedIn } = this.props;
    return (
      <div>
        {!loggedIn ? (
          <LoginPage />
        ) : (
          <div>
            <button onClick={this.logout}>logout</button>
            <ChatContainer />
          </div>
        )}
      </div>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loginUserSuccess: PropTypes.func.isRequired,
  loadMessages: PropTypes.func.isRequired,
};

const mapStateToProps = ({ login }) => ({
  loggedIn: login.loggedIn,
});

export default withRouter(
  connect(mapStateToProps, {
    loadMessages: loadUsersMessages,
    loginUserSuccess,
  })(App)
);
