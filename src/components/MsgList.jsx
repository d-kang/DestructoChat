import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MsgItem from './MsgItem';
import ChatScroll from './ChatScroll';

class MsgList extends PureComponent {
  render() {
    const { messages, username, ...props } = this.props;
    return (
      <div id="chat__chatbox" {...props}>
        {messages.map(msg => (
          <MsgItem key={msg.messageId} username={username} {...msg} />
        ))}
      </div>
    );
  }
}

MsgList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  username: PropTypes.string.isRequired,
};

export default ChatScroll(MsgList);
