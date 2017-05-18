import React from 'react';
import { Component } from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const fruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.updateFilterCallback} filters={props.filters} />
      <FilteredFruitList filter={props.selectedFilter} fruit={props.items} />
    </div>
  );
}

fruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: 'all',
  updateFilterCallback: null
}

export default fruitBasket;
