import React from 'react';
import PropTypes from 'prop-types';

const MsgItem = ({
  username,
  message,
  selfDestruct,
  destructAt,
  totalMs,
  hasExpired,
  _id: messageId,
}) => (
  <div>
    <hr />
    <div>username: {username}</div>
    <div>message: {message}</div>
    <div>selfDestruct: {selfDestruct}</div>
    <div>destructAt: {destructAt}</div>
    <div>totalMs: {totalMs}</div>
    <div>hasExpired: {hasExpired.toString()}</div>
    <div>messageId: {messageId}</div>
    <hr />
  </div>
);

MsgItem.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  selfDestruct: PropTypes.bool.isRequired,
  destructAt: PropTypes.number.isRequired,
  totalMs: PropTypes.number.isRequired,
  hasExpired: PropTypes.bool.isRequired,
  _id: PropTypes.string.isRequired,
};

export default MsgItem;
