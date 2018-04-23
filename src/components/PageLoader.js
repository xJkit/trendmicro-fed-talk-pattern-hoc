import React from 'react';
import Loader from './Loader';

const PageLoader = () => (
  <div
    style={{
      position: 'absolute',
      top: 120,
      left: '50%',
      transform: 'translateX(-50%)'
    }}
  >
    <Loader size="large" />
  </div>
);

export default PageLoader;
