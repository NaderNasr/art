import { Alert, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import commerce from './lib/commerce';
import {
  Navbar,
  ProductsList,
  Hot,
  Checkout
} from './components/'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import ProductAR from './components/Products/Product/AR/ProductAR';
import ARWrapper from './components/Products/Product/AR/ARWrapper';
import UserAuthentication from './components/Authentication/UserAuthentication';
import Profile from './components/Authentication/userProfile/Profile';
// import Profile from './components/Authentication/userProfile/Profile';




const App = () => {
  // use state to fetch products
  const [products, setProducts] = useState([]);
  //cart managed with state
  const [cart, setCart] = useState({});
  // loading animation
  const [loading, setLoading] = useState(true);

  // incoming order to state
  const [order, setOrder] = useState({})
  //error message
  const [errorMessage, setErrorMessage] = useState('')



  // Authentication----------------------------------------------------
  //user authentication
  const [userEmail, setUserEmail] = useState('');
  const [userToken, setUserToken] = useState('');
  const [emailSent, setEmailSent] = useState('');
  // --------------------------------------------------------------------------------------------------------

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
      .then((res) => {
        setCart(res.cart);
      })
      .catch((error) => {
        console.log(`There was an error adding ${productId} to cart`, error);
      });
  }

  const handleEmptyCart = () => {
    commerce.cart.empty()
      .then((res) => {
        setCart(res.cart);
        console.log(cart);
      })
      .catch((error) => {
        console.log('There was an error emptying cart', error);
      });
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh()

    setCart(newCart);
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      console.log("Incoming Order: ", incomingOrder)
      setOrder(incomingOrder);
      refreshCart()
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }

  const handleRemoveFromCart = (lineItemId) => {
    commerce.cart.remove(lineItemId)
      .then((res) => {
        setCart(res.cart);
        console.log(cart);
      })
      .catch((error) => {
        console.log(`There was an error removing ${lineItemId} from cart`, error);
      });
  }

  const handleUpdateCartQuantity = (lineItemId, quantity) => {
    commerce.cart.update(lineItemId, { quantity })
      .then((res) => {
        setCart(res.cart);
        console.log(cart);
      })
      .catch((error) => {
        console.log(`There was an error updating quantity of ${lineItemId}`, error);
      });
  }


  //--------------------------------AUTHENTICATION----------------------------------------------------------------------------------------------------------------------------

  const auth = () => {
    commerce.customer.login(userEmail, 'http://localhost:3000/').then((loginToken) => setEmailSent(loginToken));
  }

  //Post alert when email as been sent console.log(loginToken)

  const handleSubmit = (event) => {
    event.preventDefault();
    auth()
  };


  let { id } = useParams();
  let jwtToken = { id }


  const jwt = () => {
    commerce.customer.getToken(jwtToken.id)
      .then((jwt) => setUserToken(jwt))
      .catch((err) => console.log('JWT ERROR: ', err))
  }

  const handleLogOut = (e) => {
    commerce.customer.logout();
  };

  // const sent = () => {
  //   return <div>{emailSent.success ?
  //     <Alert severity="success">E-mail sent!</Alert>
  //     : ''}</div>
  // }


  console.log(jwtToken.id)
  console.log('Customer Id is: ', commerce.customer.id())
  console.log('userEmail: ', userEmail);
  console.log('JWT_Token: ', userToken);
  console.log('YOUR EMAIL', userEmail);
  console.log('IS CUSTOMER LOGGED IN?', (commerce.customer.isLoggedIn() ? "YES" : "NO Not YET"));


  useEffect(() => {
    if (jwtToken) {
      return jwt()
    }
    fetchProducts();
    fetchCart();
    const timer = setInterval(() => {
      setLoading(false)
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <div style={{ marginBottom: '100px' }}>
          <Navbar totalItems={cart.total_items} />
        </div>
        <Routes>
          <Route path="/" element={
            loading
              ?
              <div>
                <Box sx={{ width: '50%', marginLeft: '25%', marginTop: '25%' }}>
                  <p>Loading</p>
                  <LinearProgress />
                </Box>
              </div>
              :
              <ProductsList products={products} onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={
            <Cart
              cart={cart}
              onEmptyCart={handleEmptyCart}
              onRemoveFromCart={handleRemoveFromCart}
              onUpdateCartQuantity={handleUpdateCartQuantity}
            />} />
          <Route path="/hot" element={<Hot />} />
          <Route
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
              />} />
          <Route path="/AR" element={<ARWrapper />}>
            <Route path=":productId" element={<ProductAR products={products} />} />
          </Route>
          <Route
            path="/login"
            element={<UserAuthentication
              handleSubmit={handleSubmit}
              handleLogOut={handleLogOut}
              emailSent={emailSent}
              setUserEmail={setUserEmail}
              userToken={userToken}
              // sent={sent}
            />
            } />
          <Route path="/:id"
            element={<UserAuthentication
              userToken={userToken}
            />}
          />
        </Routes>
      </div>
    </Router>

  )
}

export default App
