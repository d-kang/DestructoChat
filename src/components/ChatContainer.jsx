import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Comment, Header } from 'semantic-ui-react';
import MsgList from './MsgList';
import socket from '../socketConnection';
import ChatForm from './ChatForm';

class ChatContainer extends PureComponent {
  state = {
    selfDestruct: false,
    destructAt: -1,
    dropdownDisplay: 'Self Destruct',
  };

  setChatContainerState = data => {
    this.setState(data);
  };

  submitMessage = value => {
    const { selfDestruct, destructAt } = this.state;
    const { username } = this.props;

    const data = {
      author: username,
      message: value,
      selfDestruct,
      destructAt: destructAt + Date.now() + 2000,
    };
    socket.emit('add message', data);
    this.refreshDestructState();
  };
  refreshDestructState = () => {
    const refreshData = {
      message: '',
      selfDestruct: false,
      destructAt: -1,
      dropdownDisplay: 'Self Destruct',
    };
    this.setState(refreshData);
  };

  render() {
    const { messages, username } = this.props;
    const { dropdownDisplay } = this.state;
    return (
      <Comment.Group threaded id="chat__chatroom">
        <Header as="h3" dividing>
          Destructo Chat <span style={{ opacity: '0' }}>•</span>{' '}
          <span style={{ color: 'white', fontSize: '.7em' }}>
            Logged in as {username}
          </span>
        </Header>
        <MsgList messages={messages} username={username} />
        <ChatForm
          buttonText="Add Reply"
          submitMessage={this.submitMessage}
          setParentState={this.setChatContainerState}
          dropdownDisplay={dropdownDisplay}
        />
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
