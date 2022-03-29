import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import commerce from '../../../lib/commerce';

const WebToken = () => {

  const [userToken, setUserToken] = useState('');
  let { slug } = useParams();
  let jwtToken = { slug }

  const jwt = () => {
    // if(!userInfo) {
    commerce.customer.getToken(jwtToken.slug)
      .then((jwt) => {
        setUserToken(jwt)
        window.location.href = '/profile';
      })
      .catch((err) => console.log('JWT ERROR: ', err))
    // }
  }

  useEffect(() => {
    jwt()
  }, []);

  return (
    <div>WebToken</div>
  )
}

export default WebToken