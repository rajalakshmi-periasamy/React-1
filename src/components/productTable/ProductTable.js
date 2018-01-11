/**
 * Created by masikann on 1/10/18.
 */

import React from 'react';
import ProductCategoryRow from './ProductCategoryRow.js';
import ProductRow from './ProductRow.js';

class ProductTable extends React.Component {
  fetchCategories(products) {
    return (products.reduce((acc, elem) => {
      if (acc.indexOf(elem.category) === -1) {
        acc.push(elem.category)
      }
      return acc;
    }, []))
  }

  fetchRelevantProducts() {
    const searchText = this.props.filterValues.searchText.toLowerCase();
    const showInStock = this.props.filterValues.showInStock;
    return (this.props.products.reduce((acc, elem) => {
      if ((elem.name.toLowerCase()).indexOf(searchText) !== -1 && (showInStock ? elem.stocked : true)) {
        acc.push(elem);
      }
      return acc;
    }, []))
  }

  render() {
    const products = this.fetchRelevantProducts();
    const categories = this.fetchCategories(products);
    return(
      <table>
      {
        categories.map((category) => {
            return (
              <tbody key={category}>
                <ProductCategoryRow productCategory={category} />
                {
                  products.filter((product) => product.category === category)
                    .map((eachProductInCategory) =>
                      <ProductRow product={eachProductInCategory} key={`${category}~${eachProductInCategory.name}`} />)
                }
              </tbody>
            )
          }
        )
      }
      </table>
    )
  }
}

export default ProductTable