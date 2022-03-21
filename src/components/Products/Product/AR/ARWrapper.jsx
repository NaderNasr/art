import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// using this component for nested routes... outlet may be causing problems...

const ARWrapper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return(
    <div>
      <p>Hello AR</p>
      <Outlet />
    </div>
  );
}

export default ARWrapper;