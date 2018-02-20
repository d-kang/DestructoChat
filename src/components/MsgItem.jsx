import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Comment } from 'semantic-ui-react';

class MsgItem extends React.PureComponent {
  state = {
    timeUntil: null,
  };

  componentDidMount() {
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
    const { username, message, createdAt } = this.props;
    return (
      <Comment>
        <Comment.Content>
          <Comment.Author as="a">{username}</Comment.Author>
          <Comment.Metadata>
            <span>{moment(createdAt).fromNow()}</span>
          </Comment.Metadata>
          <Comment.Metadata>
            <span>
              {this.state.timeUntil && (
                <div>time till destruct: {this.state.timeUntil}</div>
              )}
            </span>
          </Comment.Metadata>
          <Comment.Text>{message}</Comment.Text>
        </Comment.Content>
      </Comment>
    );
  }
}

MsgItem.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  selfDestruct: PropTypes.bool.isRequired,
  destructAt: PropTypes.number.isRequired,
  messageId: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default MsgItem;
