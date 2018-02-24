import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginPage from './LoginPage';
import ChatContainer from './ChatContainer';
import { loadUsersMessages } from '../actions/messages';

class App extends PureComponent {
  componentDidMount() {
    this.props.loadMessages();
  }
  render() {
    const { loggedIn } = this.props;
    return <div>{!loggedIn ? <LoginPage /> : <ChatContainer />}</div>;
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ login }) => ({
  loggedIn: login.loggedIn,
});

export default withRouter(
  connect(mapStateToProps, { loadMessages: loadUsersMessages })(App)
);
