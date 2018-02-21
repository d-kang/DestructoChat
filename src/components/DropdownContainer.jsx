import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import DropdownList from './DropdownList';
import { dropDownTagOptions } from '../options';

class DropdownContainer extends PureComponent {
  render() {
    const { tagOptions, setSelfDestruct, dropdownDisplay } = this.props;
    return (
      <Dropdown
        style={{ color: 'white' }}
        upward
        text={dropdownDisplay}
        multiple
        icon="filter"
      >
        <Dropdown.Menu>
          <Dropdown.Menu scrolling>
            <DropdownList
              tagOptions={tagOptions}
              setSelfDestruct={setSelfDestruct}
            />
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

DropdownContainer.defaultProps = {
  tagOptions: dropDownTagOptions,
};

DropdownContainer.propTypes = {
  tagOptions: PropTypes.arrayOf(PropTypes.object),
  setSelfDestruct: PropTypes.func.isRequired,
  dropdownDisplay: PropTypes.string.isRequired,
};

export default DropdownContainer;
