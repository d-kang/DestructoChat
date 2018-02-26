import React, { PureComponent } from 'react';

class Form extends PureComponent {
  state = { value: '' };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { value } = this.state;
    const { setParentState } = this.props;
    setParentState(value);
    this.clearState('value');

    e.target[0].value = '';
  }

  clearState = propertyName => {
    this.setState({ [propertyName]: '' });
  };

  render() {
    const { display, buttonText } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {this.props.display}
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value={buttonText} />
      </form>
    );
  }
}

export default Form;
