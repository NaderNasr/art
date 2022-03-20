import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import commerce from './lib/commerce';
import { Navbar, ProductsList } from './components/'

const App = () => {
  // use state to fetch products
  const [products, setProducts] = useState([]);
  // loading animation
  const [loading, setLoading] = useState(true);
  // modal state

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
    fetchProducts();
    const timer = setInterval(() => {
      setLoading(false)
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <div style={{ marginBottom: '100px' }}>
        <Navbar />
      </div>

      {loading
        ?
        <div>
          <Box sx={{ width: '50%', marginLeft: '25%', marginTop: '25%' }}>
            <p>Loading</p>
            <LinearProgress />
          </Box>
        </div>
        :
        <ProductsList products={products} />}
    </div>
  )
}

export default App
