/**
 * Created by masikann on 1/10/18.
 */

import React from 'react';
import styles from '../FilterableProductTable.less'

function ProductRow({ product }) {
  return(
    <tr>
      <td className={product.stocked ? '' : styles.redFont}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

export default ProductRow