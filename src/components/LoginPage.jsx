import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUserRequest, signupUserRequest } from '../actions/username';

class LoginPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
      select: 'Login',
    };
  }

  onChange = e => {
    this.setState({ textInput: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { select, textInput } = this.state;
    if (select === 'Login') {
      this.props.loginUserRequest(textInput);
    } else {
      this.props.signupUserRequest(textInput);
    }
    e.target[0].value = '';
  };

  handleSelection = e => {
    this.setState({ select: e.target.value });
  };

  render() {
    return (
      <div>
        <select onChange={this.handleSelection}>
          <option value="Login">Login</option>
          <option value="Signup">Signup</option>
        </select>
        <form onSubmit={this.onSubmit} action="">
          {this.state.select}:{' '}
          <input type="text" maxLength="14" onChange={this.onChange} />
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  loginUserRequest: PropTypes.func.isRequired,
  signupUserRequest: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({});

export default connect(mapStateToProps, {
  loginUserRequest,
  signupUserRequest,
})(LoginPage);
