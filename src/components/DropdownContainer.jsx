import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DropdownUI from './DropdownUI';
import { dropDownTagOptions } from '../options';

class DropdownContainer extends PureComponent {
  render() {
    const { tagOptions, setSelfDestruct, dropdownDisplay } = this.props;
    return (
      <DropdownUI
        setSelfDestruct={setSelfDestruct}
        text={dropdownDisplay}
        tagOptions={tagOptions}
      />
    );
  }
}

DropdownContainer.defaultProps = {
  tagOptions: dropDownTagOptions,
};

DropdownContainer.propTypes = {
  tagOptions: PropTypes.arrayOf(PropTypes.object),
};

export default DropdownContainer;
