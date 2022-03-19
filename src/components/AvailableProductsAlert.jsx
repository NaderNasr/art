import React from 'react'
import { Alert } from '@mui/material'


const AvailableProductsAlert = ({ product }) => {
  console.log(product.inventory.available === 0)
  return (
    <>
      {product.is.sold_out && !product.inventory.available
        ?
        <Alert severity="error" style={{ width: '120px' }}>SOLD OUT</Alert>
        :
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Alert severity="success" style={{ width: '100px' }}>
            {product.inventory.available} {product.inventory.available < 2 ? 'Unit' : 'Units'}
          </Alert>
        </div>}
    </>
  )
}

export default AvailableProductsAlert