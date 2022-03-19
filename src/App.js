
import React, { useEffect, useState } from 'react'
// import ProductsList from './components/ProductsList'
// import Navbar from './components/Navbar/Navbar';
import commerce from './lib/commerce';
import { Navbar , ProductsList } from './components/'
import Cart from './components/Cart/Cart';
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
  //cart managed with state
  const [cart, setCart] = useState({});
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
  // use promise to load cart
  const fetchCart = () => {
    commerce.cart.retrieve()
    .then((cart) => {
      setCart(cart);
    })
    .catch((error) => {
      console.log('There was an error fetching the cart', error);
    });
  }
  // use promise to add item(s) to cart
  const handleAddToCart = (productId, quantity) => {
    commerce.cart.add(productId, quantity)
    .then((item) => {
      setCart(item.cart);
    })
    .catch((error) => {
      console.log('There was an error adding an item to cart', error);
    });
  }

  //load products/cart once
  useEffect(() => {
    fetchProducts();
    fetchCart();

    // commerce.cart.empty(); // REMEMBER!!
  }, []);

  // console.log(cart);

  //////////////////////
  //EMPTY CART!!!!!!!!//
  //EMPTY CART!!!!!!!!//
  //////////////////////

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div style={{marginBottom:'100px'}}>
        <Navbar totalItems={cart.total_items} />
        </div>
        {/* <ProductsList products={products} onAddToCart={handleAddToCart} /> */}
        <Cart cart={cart} />
      </div>
    </ThemeProvider>
  )
}

export default App
