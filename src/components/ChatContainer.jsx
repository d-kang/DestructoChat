import React from 'react';
import PropTypes from 'prop-types';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import MsgList from './MsgList';

const ChatContainer = ({ messages }) => (
  <Comment.Group threaded id="chat__chatroom">
    <Header as="h3" dividing>
      Desctructo Chat
    </Header>
    <MsgList messages={messages} />
    <Form reply id="chat__form">
      <Form.TextArea />
      <Button
        content="Add Reply"
        labelPosition="left"
        icon="edit"
        id="chat__button"
      />
    </Form>
  </Comment.Group>
);

ChatContainer.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatContainer;
