<<<<<<< HEAD
import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
=======

>>>>>>> main
import React, { useEffect, useState } from 'react'
// import ProductsList from './components/ProductsList'
// import Navbar from './components/Navbar/Navbar';
import commerce from './lib/commerce';
import { Navbar , ProductsList } from './components/'
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "3rem"
    }
  },
});


const App = () => {
  // use state to fetch products
  const [products, setProducts] = useState([]);
  // loading animation
  const [loading, setLoading] = useState(true);
  // modal state
  // const [open, setOpen] = React.useState(false);

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
       <div className="App">
        <div style={{marginBottom:'100px'}}>
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
        <ProductsList products={products}
        // open={open} setOpen={setOpen}

        />}
    </div>
  )
}

export default App
