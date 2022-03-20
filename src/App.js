import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import commerce from './lib/commerce';
import {
  Navbar,
  ProductsList
} from './components/'

import Cart from './components/Cart/Cart';



const App = () => {
  // use state to fetch products
  const [products, setProducts] = useState([]);
  //cart managed with state
  const [cart, setCart] = useState({});
  // loading animation
  const [loading, setLoading] = useState(true);
  // modal state

  // use promise to load products
  const fetchProducts = () => {
    commerce.products.list()
      .then((products) => {
        setProducts(products.data);
        console.log(products);
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
    const timer = setInterval(() => {
      setLoading(false)
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  //////////////////////
  //EMPTY CART!!!!!!!!//
  //EMPTY CART!!!!!!!!//
  //////////////////////

  return (
    <div className="App">
      <div style={{ marginBottom: '100px' }}>
        <Navbar totalItems={cart.total_items} />
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
        <ProductsList products={products} onAddToCart={handleAddToCart} />}
      {/* <Cart cart={cart} /> */}
    </div>
  )
}

export default App
