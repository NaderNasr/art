import React from 'react'
import { Alert, Tooltip } from '@mui/material'


const AvailableProductsAlert = ({ product }) => {

  return (
    <>
      {product.is.sold_out && !product.inventory.available
        ?
        <Tooltip title="SOLD OUT" placement="right">
          <Alert severity="error" style={{ width: '0px' }}></Alert>
        </Tooltip>
        :
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

          {product.inventory.available < 2
            ? <Tooltip title="Low Stock" placement="right">
              <Alert severity="warning"></Alert>
            </Tooltip>
            :
            <Tooltip title="In Stock" placement="right">
              <Alert severity="success" style={{ width: '0px' }}></Alert>
            </Tooltip>
          }
        </div>}
    </>
  )
}

export default AvailableProductsAlert