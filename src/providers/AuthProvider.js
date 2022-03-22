// import React, { useState, createContext, useEffect } from 'react'
// import { useParams } from 'react-router-dom';
// import commerce from "../lib/commerce";

// export const authContext = createContext();

// const AuthProvider = (props) => {
//   //user authentication

//   let { id } = useParams();
//   let jwtToken = { id }

//   const jwt = () => {
//     commerce.customer.getToken(jwtToken.id)
//       .then((jwt) => setUserToken(jwt))
//       .catch((err) => console.log('JWT ERROR: ', err))
//     console.log(jwtToken.id)
//   }


//   useEffect(() => {
//     if (jwtToken) {
//       return jwt()
//     }
//   }, []);


//   const providerData = { userToken, jwt }

//   return (
//     <authContext.Provider value={providerData}>
//       {props.children}
//     </authContext.Provider>
//   )
// }

// export default AuthProvider