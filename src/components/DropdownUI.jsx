import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

const DropdownUI = ({ tagOptions, text, setSelfDestruct }) => (
  <Dropdown upward text={text} multiple icon="filter">
    <Dropdown.Menu>
      <Dropdown.Menu scrolling>
        {tagOptions.map(option => (
          <Dropdown.Item
            key={option.value}
            {...option}
            onClick={() => {
              const data = {
                selfDestruct: true,
                destructAt: option.value,
                dropdownDisplay: option.text,
              };
              if (option.value === -1) {
                data.selfDestruct = false;
                data.dropdownDisplay = 'Self Destruct';
              }
              setSelfDestruct(data);
            }}
          />
        ))}
      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
);

DropdownUI.propTypes = {
  tagOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  text: PropTypes.string.isRequired,
};

export default DropdownUI;
