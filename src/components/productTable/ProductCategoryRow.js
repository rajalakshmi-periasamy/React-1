/**
 * Created by masikann on 1/10/18.
 */

import React from 'react';

function ProductCategoryRow({ productCategory }) {
  return(
    <tr>
      <th colspan={2}>{productCategory}</th>
    </tr>
  )
}

export default ProductCategoryRow