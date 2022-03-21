import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

// using this component for nested routes... outlet may be causing problems...

const ARWrapper = () => {
  return(
    <div>
      <Outlet />
    </div>
  );
}

export default ARWrapper;