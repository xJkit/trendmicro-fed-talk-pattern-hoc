import React from 'react';

/** Examples */
import WithState from './WithState';
import WithStatePlusWithHandlers from './WithStatePlusWithHandlers';
import WithStateHandlerProps from './WithStateHandlerProps';
/** */
export default () => (
  <ul>
    <li>
      <WithState />
    </li>
    <li>  
      <WithStatePlusWithHandlers />
    </li>
    <li>
      <WithStateHandlerProps />
    </li>  
  </ul>
);