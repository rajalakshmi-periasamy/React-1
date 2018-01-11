/**
 * Created by masikann on 1/10/18.
 */

import React from 'react';

import ProductTable from './productTable/ProductTable.js';
import SearchBar from './SearchBar.js';

const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: false, name: "Football"},
    {category: "Sporting Goods", price: "$29.99", stocked: true, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Sporting Goods", price: "$9.99", stocked: false, name: "Baseball"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      showInStock: false
    }
  }

  handleChange(e) {
    const targetElement = e.target;
    this.setState({
      [targetElement.name]: targetElement.type === 'checkbox' ? targetElement.checked : targetElement.value
    })
  }

  render() {
    return (
      <section>
        <SearchBar fieldValues={this.state} onChange={this.handleChange.bind(this)} />
        <ProductTable products={products} filterValues={this.state} />
      </section>
    )
  }
}

export default FilterableProductTable;