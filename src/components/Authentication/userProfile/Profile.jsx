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
  const [allOrders, setAllOrders] = useState('');




  let { id } = useParams();
  let jwtToken = { id }

  const jwt = () => {
    commerce.customer.getToken(jwtToken.id)
      .then((jwt) => setUserToken(jwt))
      .catch((err) => console.log('JWT ERROR: ', err))
  }



  useEffect(() => {
    if (jwtToken) {
      jwt()
    }
    const user = commerce.customer.about().then((customer) => setUserInfo(customer));
    if(user){
  }
  console.log(user)
  }, [])

  console.log(allOrders)
  console.log(userInfo)
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
      {/* ----------------------------------Address----------------------------- */}
      <br /><br /><br />
      <Divider sx={{ borderBottomWidth: 2 }} />
      <br /><br /><br />

      <Typography variant="h4" component="div">
        Address
      </Typography>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {<br />}
          {<br />}
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Postal Code:    {userInfo.default_shipping.postal_zip_code}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            State:    {userInfo.default_shipping.county_state}
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
      </Card>
      {/* ----------------------------------Orders----------------------------- */}
      <br /><br /><br />
      <Divider sx={{ borderBottomWidth: 2 }} />
      <br /><br /><br />
    </>

  )
}

export default Profile