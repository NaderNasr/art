import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import ProductsList from './components/ProductsList'
import commerce from './lib/commerce';

const App = () => {
  // use state to fetch products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = React.useState(true); //set back to false

  // use promise to load products
  const fetchProducts = () => {
    commerce.products.list()
      .then((products) => {
        setProducts(products.data);
      })
      .catch((error) => {
        console.log('There was an error fetching the products', error)
      });
  }

  //load products once
  useEffect(() => {
    // const timer = setInterval(() => {
    fetchProducts();
    setLoading(false)
  // }, 100);
  // return () => {
  //   clearInterval(timer);
  // };
  }, []);

  return (
    <div>
      {loading
        ?
        <div>
          <Box sx={{ width: '50%', marginLeft: '25%', marginTop: '25%' }}>
          <p>Loading</p>
            <LinearProgress />
          </Box>
        </div>
        :
        <ProductsList products={products} open={open} setOpen={setOpen}/>}
    </div>
  )
}

export default App
