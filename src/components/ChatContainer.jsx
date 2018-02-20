import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import MsgList from './MsgList';
import socket from '../socketConnection';
import DropdownUI from './DropdownUI';
import { dropDownTagOptions } from '../options';

class ChatContainer extends PureComponent {
  state = {
    textInput: '',
  };

  onTextInput = e => {
    const textInput = e.target.value;
    this.setState({ textInput });
  };

  submitMessage = e => {
    console.log('e', e);
    e.preventDefault();
    e.target[0].value = '';
    console.log('ran');
    const { textInput } = this.state;
    const { username } = this.props;
    const myMessageObj = {
      username,
      message: textInput,
      selfDestruct: true,
      destructAt: 30000 + Date.now(),
    };
    socket.emit('add message', myMessageObj);
  };

  render() {
    const { messages, tagOptions } = this.props;
    return (
      <Comment.Group threaded id="chat__chatroom">
        <Header as="h3" dividing>
          Desctructo Chat
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
          <DropdownUI text="Self Destruct" tagOptions={tagOptions} />
        </Form>
      </Comment.Group>
    );
  }
}

ChatContainer.defaultProps = {
  tagOptions: dropDownTagOptions,
};

ChatContainer.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  tagOptions: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = ({ login, messages }) => ({
  username: login.username,
  messages: messages.messages,
});

export default connect(mapStateToProps)(ChatContainer);
