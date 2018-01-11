/**
 * Created by masikann on 1/10/18.
 */
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { fieldValues, onChange } = this.props;
    return (
      <form>
        <input type="text"
          name="searchText"
          id="searchText"
          value={fieldValues.searchText}
          onChange={onChange}
          placholder="Search" />
        <input type="checkbox"
          name="showInStock"
          id="showInStock"
          value={fieldValues.showInStock}
          onChange={onChange} />
        <label htmlFor="showInStock">Only show products in stock</label>
      </form>
    )
  }
}

export default SearchBar