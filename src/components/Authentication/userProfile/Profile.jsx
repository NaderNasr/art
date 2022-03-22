import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import commerce from '../../../lib/commerce'

const Profile = () => {
  const [userToken, setUserToken] = useState('');

  let { id } = useParams();
  let jwtToken = { id }

  const jwt = () => {
    commerce.customer.getToken(jwtToken.id)
      .then((jwt) => setUserToken(jwt))
      .catch((err) => console.log('JWT ERROR: ', err))
  }

  useEffect(() => {
    if (jwtToken) {
      return jwt()
    }
  },[])

  console.log(userToken)

  return (
    <div>Profile</div>
  )
}

export default Profile