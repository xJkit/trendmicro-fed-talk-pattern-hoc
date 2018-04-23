import React from 'react';
import Content from 'react-icons/lib/md/view-list';

export default ({ user }) => (
  <div>
    <h2>
      {`Welcome back, ${user}`}
    </h2>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Content style={{ fontSize: 128, opacity: 0.7 }} />
      <span style={{ fontSize: 32 }}>Some Secret Here...</span> 
    </div>
  </div>
);
