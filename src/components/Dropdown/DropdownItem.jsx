import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

class DropdownItem extends PureComponent {
  destructOnClick = () => {
    const data = {
      selfDestruct: true,
      destructAt: this.props.value,
      dropdownDisplay: this.props.text,
    };
    if (this.props.value === -1) {
      data.selfDestruct = false;
      data.dropdownDisplay = 'Self Destruct';
    }
    this.props.setSelfDestruct(data);
  };
  render() {
    const { icon, text, label } = this.props;
    return (
      <Dropdown.Item
        label={label}
        icon={icon}
        text={text}
        onClick={this.destructOnClick}
      />
    );
  }
}

DropdownItem.defaultProps = {
  icon: null,
  label: null,
};

DropdownItem.propTypes = {
  setSelfDestruct: PropTypes.func.isRequired,
  icon: PropTypes.string,
  label: PropTypes.object,
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default DropdownItem;
