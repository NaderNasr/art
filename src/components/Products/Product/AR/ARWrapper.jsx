import React from 'react';
import { Outlet } from 'react-router-dom';

const ARWrapper = () => {
  return(
    <div>
      <Outlet />
    </div>
  );
}

export default ARWrapper;