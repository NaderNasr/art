import React from 'react';
import { Outlet } from 'react-router-dom';

const ARWrapper = () => {
  return(
    <div>
      <p>**AR WRAPPER**</p>
      <Outlet />
    </div>
  );
}

export default ARWrapper;