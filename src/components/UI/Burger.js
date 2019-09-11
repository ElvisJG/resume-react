import React from 'react';
import { Bun } from './index';

export default function Burger(props) {
  return (
    <div>
      <Bun>
        <div className='condiments' />
        <div className='lettuce' />
        <div className='patty' />
      </Bun>
    </div>
  );
}
