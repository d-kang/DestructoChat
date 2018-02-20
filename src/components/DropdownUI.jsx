import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropdownUI = ({ tagOptions, text }) => (
  <Dropdown upward text={text} multiple icon="filter">
    <Dropdown.Menu>
      <Dropdown.Menu scrolling>
        {tagOptions.map(option => (
          <Dropdown.Item key={option.value} {...option} />
        ))}
      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
);

export default DropdownUI;
