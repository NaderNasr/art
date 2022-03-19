import React from 'react'
import ProductItem from './ProductItem'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  background: "#F6F6F6",
    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    },
}));

const ProductsList = ({ products }) => {
  //view the products in browser > inspect > console
  console.log(products)
  return (
    //Material UI Grid
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
      {products.map((product) => (
        <Grid item xs={2} sm={4} md={4} key={product.id}>
          <Item>
          <ProductItem
            product={product}
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

