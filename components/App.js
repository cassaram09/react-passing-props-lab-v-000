import React from 'react';
import { Component } from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';
import FruitBasket from './FruitBasket';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      filters: [],
      selectedFilter: null,
      items: [],
      fruit: []
    };

    this.fetchFilters = this.fetchFilters.bind(this);
    this.fetchFruit = this.fetchFruit.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ selectedFilter: e.target.value });
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  fetchFruit(){
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ items: fruit}));
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  render(){
    const {filters, selectedFilter, items} = this.state;
    return (
      <FruitBasket updateFilterCallback={this.handleFilterChange} selectedFilter={selectedFilter} filters={filters} items={items} />
    );
  }
  
}
