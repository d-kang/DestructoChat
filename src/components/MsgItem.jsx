import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class MsgItem extends React.PureComponent {
  state = {
    timeUntil: null,
  };

  componentDidMount() {
    console.log('this.props.selfDestruct', this.props);
    if (this.props.selfDestruct === true) {
      this.getTimeUntil(this.props.destructAt);
    }
  }

  componentWillUnmount() {
    clearInterval(this[this.props.messageId]);
  }

  getTimeUntil = eventTime => {
    const currTime = Date.now();
    const diff = eventTime - currTime;
    let duration = moment.duration(diff, 'milliseconds');
    const interval = 1000;

    this[this.props.messageId] = setInterval(() => {
      duration = moment.duration(duration - interval, 'milliseconds');
      const timeUntil = `${duration.hours()}:${duration.minutes()}:${duration.seconds()}`;
      this.setState({ timeUntil });
    }, interval);
  };

  render() {
    const {
      username,
      message,
      selfDestruct,
      destructAt,
      messageId,
    } = this.props;
    return (
      <div>
        <hr />
        <div>username: {username}</div>
        <div>message: {message}</div>
        <div>selfDestruct: {selfDestruct}</div>
        <div>destructAt: {destructAt}</div>
        <div>messageId: {messageId}</div>
        {this.state.timeUntil && (
          <div>time till destruct: {this.state.timeUntil}</div>
        )}
        <hr />
      </div>
    );
  }
}

MsgItem.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  selfDestruct: PropTypes.bool.isRequired,
  destructAt: PropTypes.number.isRequired,
  messageId: PropTypes.number.isRequired,
};

export default MsgItem;
