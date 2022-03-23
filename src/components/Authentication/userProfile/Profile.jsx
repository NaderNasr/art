import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { useParams } from 'react-router-dom';
import commerce from '../../../lib/commerce'

const Profile = () => {
  const [userToken, setUserToken] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const [allOrders, setAllOrders] = useState(null);

  const [productNames, setProductNames] = useState('')




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
    // jwt()
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

        const productNames = lineItems.map((lineItem) => (
          lineItem.map((product) => product.product_name)
        ))

        console.log('ProductNames: ', productNames)

        setProductNames(productNames)
      }
    }


  }, [allOrders])

  // console.log('allOrders: ', allOrders.data)
  console.log('productNames: ', productNames)
  // console.log('userToken: ', userToken)
  return (
    <>
      <Typography variant="h4" component="div">
        Profile Details
      </Typography>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {<br />}
          {<br />}
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
      </Card>
      {/* ----------------------------------Orders----------------------------- */}
      <br /><br /><br />
      <Divider sx={{ borderBottomWidth: 2 }} />
      <br /><br /><br />
      <Typography variant="h4" component="div">
        Orders
      </Typography>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {<br />}
          {<br />}

          {productNames !== '' ?
            productNames.map((productName, id) => (
              <Typography key={id} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {productName}
              </Typography>
            )) : <></>}

        </CardContent>
      </Card>
      {/* ----------------------------------Address----------------------------- */}
      <br /><br /><br />
      <Divider sx={{ borderBottomWidth: 2 }} />
      <br /><br /><br />

      <Typography variant="h4" component="div">
        Address
      </Typography>
      {/* <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {<br />}
          {<br />}
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
      </Card> */}
      {/* ----------------------------------Orders----------------------------- */}
      <br /><br /><br />
      <Divider sx={{ borderBottomWidth: 2 }} />
      <br /><br /><br />
    </>

  )
}

export default Profile