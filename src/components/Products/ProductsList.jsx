import React from 'react'
import ProductItem from '../Products/Product/ProductItem'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Category from '../Categories/Category';

import Search from './Search';

const Item = styled(Paper)(() => ({
  background: "#F6F6F6",
  '&:hover': {
    boxShadow: '0 14px 20px rgba(0,0,0,0.25), 0 20px 45px rgba(0,0,0,0.40)'
  },
  borderRadius: '25px'
}));


const ProductsList = ({ products, onAddToCart, handleSearch, categories, setSearch }) => {
  //view the products in browser > inspect > console
  // console.log(products)
  return (
    //Material UI Grid
    <div style={{ paddingRight: '2px', marginLeft: '8px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '40px'
      }}>
        <Search handleSearch={handleSearch} />
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
          <h1>Popular Collections</h1>
        </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '40px'
        }}>
        <Category categories={categories} setSearch={setSearch} />
      </div>
      <Box>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
          {products.map((product) => (
            <Grid item xs={2} sm={4} md={4} key={product.id}>
              <Item>
                <ProductItem
                  product={product} onAddToCart={onAddToCart}
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>

  )
}

export default ProductsList

