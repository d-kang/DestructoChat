import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import MsgList from './MsgList';
import socket from '../socketConnection';
import DropdownContainer from './DropdownContainer';

class ChatContainer extends PureComponent {
  state = {
    message: '',
    selfDestruct: false,
    destructAt: -1,
    dropdownDisplay: 'Self Destruct',
  };

  onTextInput = e => {
    const message = e.target.value;
    this.setState({ message });
  };

  setSelfDestruct = data => {
    this.setState(data);
  };

  submitMessage = e => {
    e.preventDefault();
    e.target[0].value = '';
    const { message, selfDestruct, destructAt } = this.state;
    const { username } = this.props;
    const data = {
      username,
      message,
      selfDestruct,
      destructAt: destructAt + Date.now() + 2000,
    };
    socket.emit('add message', data);
    this.refreshDestructState();
  };
  refreshDestructState = () => {
    const refreshData = {
      selfDestruct: false,
      destructAt: -1,
      dropdownDisplay: 'Self Destruct',
    };
    this.setState(refreshData);
  };

  render() {
    const { messages } = this.props;
    const { dropdownDisplay } = this.state;
    return (
      <Comment.Group threaded id="chat__chatroom">
        <Header as="h3" dividing>
          Destructo Chat
        </Header>
        <MsgList messages={messages} />
        <Form id="chat__form" onSubmit={this.submitMessage}>
          <Form.Input size="big" onChange={this.onTextInput} />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            id="chat__button"
          />
          <DropdownContainer
            setSelfDestruct={this.setSelfDestruct}
            dropdownDisplay={dropdownDisplay}
          />
        </Form>
      </Comment.Group>
    );
  }
}

ChatContainer.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ login, messages }) => ({
  username: login.username,
  messages: messages.messages,
});

export default connect(mapStateToProps)(ChatContainer);
