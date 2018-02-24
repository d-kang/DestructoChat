import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import DropdownContainer from './Dropdown/DropdownContainer';

class ChatForm extends React.Component {
  state = { value: '' };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    const { submitMessage } = this.props;
    submitMessage(value);
    this.clearState('value');

    e.target[0].value = '';
  };

  clearState = propertyName => {
    this.setState({ [propertyName]: '' });
  };

  render() {
    const { buttonText, dropdownDisplay } = this.props;
    return (
      <Form id="chat__form" onSubmit={this.handleSubmit}>
        <Form.Input
          size="big"
          value={this.state.value}
          onChange={this.handleChange}
          label={
            <DropdownContainer
              setSelfDestruct={this.props.setParentState}
              dropdownDisplay={dropdownDisplay}
            />
          }
        />
        <Button
          content={buttonText}
          labelPosition="left"
          icon="edit"
          id="chat__button"
        />
      </Form>
    );
  }
}

ChatForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  dropdownDisplay: PropTypes.string.isRequired,
  setParentState: PropTypes.func.isRequired,
};

export default ChatForm;
