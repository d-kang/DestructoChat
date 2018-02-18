import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class LoginPage extends PureComponent {
  state = {
    textInput: '',
  };

  onChange = e => {
    this.setState({ textInput: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.setUsername(this.state.textInput);
    e.target[0].value = '';
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} action="">
          login: <input type="text" maxLength="14" onChange={this.onChange} />
        </form>
        {this.state.textInput}
      </div>
    );
  }
}

LoginPage.propTypes = {
  setUsername: PropTypes.func.isRequired,
};

export default LoginPage;
