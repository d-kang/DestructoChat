import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MsgList from './MsgList';

class ChatPage extends PureComponent {
  state = {};

  render() {
    const { messages } = this.props;
    return <MsgList messages={messages} />;
  }
}

ChatPage.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default ChatPage;
