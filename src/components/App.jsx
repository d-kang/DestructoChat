import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginPage from './LoginPage';
import ChatContainer from './ChatContainer';

const App = ({ loggedIn }) => (
  <div>{!loggedIn ? <LoginPage /> : <ChatContainer />}</div>
);

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ login }) => ({
  loggedIn: login.loggedIn,
});

export default connect(mapStateToProps)(App);
