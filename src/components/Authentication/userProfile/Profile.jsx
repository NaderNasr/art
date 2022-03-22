import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import commerce from '../../../lib/commerce'

const Profile = ({ customerOrder }) => {
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
  }, [])

  console.log('customerOrder: --------->>', customerOrder.data)
  const orders = customerOrder.data
  return (
    <>
      <div>Profile</div>
      <ul>
        {/* {customerOrder ? orders.map((_) => ( */}
        <li>
        {customerOrder ? orders[0].order.line_items[0].product_name : ''}
        </li>
      {/* )) : <p>ji</p>} */}
      </ul>
    </>

  )
}

export default Profile