import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MsgItem from './MsgItem';

const MsgList = ({ messages }) => (
  <div>
    {messages.map((msg, i) => <MsgItem key={msg.messageId} {...msg} />)}
  </div>
);

MsgList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MsgList;
