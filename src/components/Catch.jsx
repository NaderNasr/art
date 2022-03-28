import React from 'react';
import { Link } from 'react-router-dom';

const Catch = () => {
  const href = window.location.href;

  return (
    <div style={{ margin: "15px" }}>
      <p>{`There is nothing to be found on ${href}...`}</p>
      <br />
      <Link to={'/'}>Home</Link>
    </div>
  )
}

export default Catch;