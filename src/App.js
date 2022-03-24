import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import commerce from './lib/commerce';
import {
  Navbar,
  ProductsList,
  Hot,
  Checkout,
  Category,
} from './components/'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ARWrapper from './components/Products/Product/AR/ARWrapper';
import UserAuthentication from './components/Authentication/UserAuthentication';
import Profile from './components/Authentication/userProfile/Profile';
import ProductAR from './components/Products/Product/AR/ProductAR';
import Catch from './components/Catch';



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

  // ------------------ Search --------------------

  const [search, setSearch] = useState('');
  // --------User Authentication -------------------
  const [userEmail, setUserEmail] = useState('');
  const [emailSent, setEmailSent] = useState('');
  // --------------------------------------------------------------------------------------------------------
  // --------User Orders ---------------------------
  const [customerOrder, setCustomerOrder] = useState('')
  //------------------------------------------------

  //-----------Search-------------------------
  const handleSearch = (value) => {
    const downCase = value.toLowerCase();
    setSearch(downCase);
    console.log(`searched for ${value}`);
  }

  const handleFilter = (target) => {
    const downcaseName = target.name.toLowerCase();
    const downcaseDesc = target.description.toLowerCase();
    const downcaseCat = target.categories[0].slug;
    if (downcaseName.includes(search) || downcaseCat.includes(search) || downcaseDesc.includes(search)) {
      return true;
    }
  }

  const clearSearch = () => {
    setSearch('');
  }

  // use promise to load products
  const fetchProducts = () => {
    commerce.products.list()
      .then((products) => {
        if (!search) {
          setProducts(products.data);
        } else {
          const filtered = products.data.filter(handleFilter);
          setProducts(filtered);
        }
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
  //--------------------------------AUTHENTICATION------------

  const auth = () => {
    commerce.customer.login(userEmail, 'https://localhost:3000/').then((loginToken) => setEmailSent(loginToken));
  }

  //Post alert when email as been sent console.log(loginToken)
  const handleSubmit = (event) => {
    event.preventDefault();
    auth()
  };

  const handleLogOut = () => {
    commerce.customer.logout();
  };

  // const customerToken = () => {
  //   commerce.customer.token()
  // }

  const customer_ID = commerce.customer.id()

  const customerOrderList = () => {
    commerce.customer.getOrders(customer_ID)
      .then((res) => setCustomerOrder(res))
  };

  useEffect(() => {
    if (commerce.customer.id()) {
      customerOrderList()
    }
    fetchProducts();
    fetchCart();

    console.log('Are you logged in ? ', (commerce.customer.isLoggedIn() ? "YES" : "NO"));
    console.log('Customer Token: ',commerce.customer.token());
    const timer = setInterval(() => {
      setLoading(false)
    }, 2000);
    return () => clearInterval(timer);
  }, [search]);


  return (
    <Router>
      <div className="App">
        <div style={{ marginBottom: '100px' }}>
          <Navbar totalItems={cart.total_items} clearSearch={clearSearch} />
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
              <ProductsList products={products} onAddToCart={handleAddToCart} handleSearch={handleSearch} />} />
          <Route path="/cart" element={
            <Cart
              cart={cart}
              onEmptyCart={handleEmptyCart}
              onRemoveFromCart={handleRemoveFromCart}
              onUpdateCartQuantity={handleUpdateCartQuantity}
            />} />
          <Route path="/hot" element={<Hot />} />
          <Route path='/categories' element={<Category />} />
          <Route
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
              />} />
          <Route path="/AR" element={<ARWrapper products={products} onAddToCart={handleAddToCart} />}>
            <Route path=":productId" element={<ProductAR products={products} />} />
          </Route>
          <Route
            path="/login"
            element={<UserAuthentication
              handleSubmit={handleSubmit}
              handleLogOut={handleLogOut}
              emailSent={emailSent}
              setUserEmail={setUserEmail}
            />
            } />
          <Route path="/:id"
            element={<Profile />}
          />
          <Route path="*" element={<Catch />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
