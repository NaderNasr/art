import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { LinearProgress } from '@mui/material';

import { useParams } from 'react-router-dom';
import commerce from '../../../lib/commerce'
import { Box } from '@mui/system';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hot from '../../Hot/Hot';


const Profile = () => {
  const [userToken, setUserToken] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const [allOrders, setAllOrders] = useState(null);

  const [productNames, setProductNames] = useState('')
  const [productImages, setProductImages] = useState('')


  let { id } = useParams();
  let jwtToken = { id }

  const jwt = () => {
    commerce.customer.getToken(jwtToken.id)
      .then((jwt) => setUserToken(jwt))
      .catch((err) => console.log('JWT ERROR: ', err))
  }

  const customerInfo = () => {
    commerce.customer.about().then((customer) => setUserInfo(customer));
  }

  const customerOrder = () => {
    commerce.customer.getOrders(userInfo.id).then((orders) => setAllOrders(orders));
  }

  useEffect(() => {
    jwt()
    customerInfo()
    customerOrder()
    // console.log('userInfo: ', userInfo)
  }, [])

  // customer order => order => multiple of products => product name

  useEffect(() => {

    if (allOrders) {
      const getCustomerOrders = allOrders.data
      if (getCustomerOrders) {
        const orders = getCustomerOrders.map((eachCustomer) => eachCustomer.order);
        const lineItems = orders.map((order) => order.line_items)
        //----------
        const lineItemProductImages = lineItems.map((lineItem) => (
          lineItem.map((product) => product.image.url)
        ))

        console.log('lineItemProductXX: ', lineItemProductImages)

        //----------
        const productNames = lineItems.map((lineItem) => (
          lineItem.map((product) => product.product_name)
        ))
        setProductNames(productNames)
        setProductImages(lineItemProductImages)
        // console.log('lineItemProduct: ', lineItemProduct)
      }
    }


  }, [allOrders])

  // console.log('productNames: ', productNames)
  // console.log(userInfo.default_shipping)

  return (
    <>
      {/* ----------------------------------User Info----------------------------- */}

      <Typography variant="h4" component="div">
        Profile Details
      </Typography>
      {userInfo ? <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            First Name:    {userInfo.firstname}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Last Name:    {userInfo.lastname}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Phone Number:    {userInfo.phone}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            E-mail:    {userInfo.email}
          </Typography>
        </CardContent>
      </Card> : <>
        <Box sx={{ width: '100%' }}>
          <p>Loading</p>
          <LinearProgress />
        </Box>
      </>}
      {/* ----------------------------------Orders----------------------------- */}
      <br />
      <Divider sx={{ borderBottomWidth: 2 }} />
      <br />
      <Typography variant="h4" component="div">
        Orders
      </Typography>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>

          {productNames !== '' ?
            productNames.map((productName, id) => (
              <Typography key={id} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Order # {id} ---- {productName}
              </Typography>
            )) : <>
              <Box sx={{ width: '100%' }}>
                <p>Loading</p>
                <LinearProgress />
              </Box>
            </>}
          <div>
            {productImages !== '' ? productImages.map((image, id) => (
              <img alt='product' src={image} style={{ width: '100px' }} />
            )) : <>
              <Box sx={{ width: '100%' }}>
                <p>Loading</p>
                <LinearProgress />
              </Box>
            </>}
          </div>
        </CardContent>
      </Card>
      {/* ----------------------------------Address----------------------------- */}
      <br />
      <Divider sx={{ borderBottomWidth: 2 }} />
      <br />

      <Typography variant="h4" component="div">
        Address
      </Typography>
      {userInfo.default_shipping ? <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Postal Code:    {userInfo.default_shipping.postal_zip_code}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Province:    {userInfo.default_shipping.county_state}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Country:    {userInfo.default_shipping.country}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Street:    {userInfo.default_shipping.street}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            City:    {userInfo.default_shipping.town_city}
          </Typography>
        </CardContent>
      </Card> : <>
        <Box sx={{ width: '100%' }}>
          <p>Loading</p>
          <LinearProgress />
        </Box>
      </>}
    </>

  )
}

export default Profile