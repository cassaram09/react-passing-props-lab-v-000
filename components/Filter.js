import React from 'react';


const filter = (props) => {
  return (
    <select onChange={props.handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {props.filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  );
}

filter.defaultProps = {
  filters: [],
  handleChange: null,
}

export default filter;
