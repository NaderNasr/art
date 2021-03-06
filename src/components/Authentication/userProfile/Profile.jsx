import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { LinearProgress } from '@mui/material';

import commerce from '../../../lib/commerce'
import { Box } from '@mui/system';


const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [allOrders, setAllOrders] = useState({});

  const [productNames, setProductNames] = useState('')
  const [productImages, setProductImages] = useState('')




  const customerInfo = () => {
    commerce.customer.about().then((customer) => setUserInfo(customer));
  }

  const customerOrder = () => {
    commerce.customer.getOrders(userInfo.id).then((orders) => setAllOrders(orders));
  }



  console.log(allOrders)


  useEffect(() => {

    // const timer = setInterval(() => {
    // jwt()
    customerInfo()
    customerOrder()
    // }, 200);
    // }
    // return () => clearInterval(timer);
    // console.log('userInfo: ', userInfo)
  }, [])


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



  // customer order => order => multiple of products => product name



  return (
    <div>
      {/* ----------------------------------User Info----------------------------- */}
      <div style={{ marginTop: '100px', marginLeft:'20px', marginRight:'20px' }}>
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
            {/* test */}
            {productNames ?
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
              {productImages ? productImages.map((image, id) => (
                <img key={id} alt='product' src={image} style={{ width: '100px' }} />
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
      </div>

    </div>

  )
}

export default Profile