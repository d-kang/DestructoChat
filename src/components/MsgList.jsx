import React from 'react';
import PropTypes from 'prop-types';
import MsgItem from './MsgItem';

const MsgList = ({ messages }) => (
  <div id="chat__chatbox">
    {messages.map(msg => <MsgItem key={msg.messageId} {...msg} />)}
  </div>
);

MsgList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MsgList;
