
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
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div style={{marginBottom:'100px'}}>
        <Navbar />
        </div>
        <ProductsList products={products} />
      </div>
    </ThemeProvider>
  )
}

export default App
