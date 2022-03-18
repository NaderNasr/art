
import React, { useEffect, useState } from 'react'
import ProductsList from './components/ProductsList'
import Navbar from './Components/Navbar/Navbar';
import commerce from './lib/commerce';

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

    <div className="App">
      <Navbar />
      <ProductsList products={products} />
    </div>
  )
}

export default App
