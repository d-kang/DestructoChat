import React from 'react';
import PropTypes from 'prop-types';
import DropdownItem from './DropdownItem';

const DropdownList = ({ tagOptions, setSelfDestruct }) =>
  tagOptions.map(option => (
    <DropdownItem
      setSelfDestruct={setSelfDestruct}
      key={option.value}
      {...option}
    />
  ));

DropdownList.propTypes = {
  tagOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DropdownList;
