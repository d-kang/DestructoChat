import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
import { loginUser, signupUser } from '../actions/username';

class LoginPage extends PureComponent {
  state = {
    textInput: '',
    loginScreen: true,
  };
  onChange = e => {
    this.setState({ textInput: e.target.value });
  };

  onEnter = e => {
    e.preventDefault();
    const { loginScreen, textInput } = this.state;
    if (loginScreen) {
      this.props.loginUser(textInput);
    } else {
      this.props.signupUser(textInput);
    }
    e.target[0].value = '';
  };

  switchLoginSignup = e => {
    e.preventDefault();
    this.setState({ loginScreen: !this.state.loginScreen });
  };

  handleSelection = e => {
    this.setState({ select: e.target.value });
  };

  render() {
    let loginOrSignup;
    if (this.state.loginScreen) {
      loginOrSignup = this.props.onLogin;
    } else {
      loginOrSignup = this.props.onSignup;
    }

    const { topMsg, btnMsg, btmleftMsg, btmRightMsg } = loginOrSignup;
    return (
      <div className="login-form">
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" id="login__header" textAlign="center">
              {topMsg}
            </Header>
            <Form size="large" onSubmit={this.onEnter}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Nickname"
                  onChange={this.onChange}
                />
                <Button id="login__button" fluid size="large">
                  {btnMsg}
                </Button>
              </Segment>
            </Form>
            <Message>
              {this.props.error && <Message>{this.props.error}</Message>}
              {btmleftMsg} <a onClick={this.switchLoginSignup}>{btmRightMsg}</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

LoginPage.defaultProps = {
  error: '',
  onLogin: {
    topMsg: 'Log-in to your account',
    btnMsg: 'Login',
    btmleftMsg: 'New to us?',
    btmRightMsg: 'Sign Up',
  },
  onSignup: {
    topMsg: 'Sign-up for an account',
    btnMsg: 'Signup',
    btmleftMsg: 'Already a member?',
    btmRightMsg: 'Log in',
  },
};

LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  signupUser: PropTypes.func.isRequired,
  onLogin: PropTypes.object,
  onSignup: PropTypes.object,
  error: PropTypes.string,
};

const mapStateToProps = ({ login }) => ({
  error: login.error,
});

export default connect(mapStateToProps, {
  loginUser,
  signupUser,
})(LoginPage);
