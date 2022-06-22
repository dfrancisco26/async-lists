import React from 'react';

export default function Ork({ name, rank, weapon, sqwad }) {
  return (
    <div className='ork'>
      <p>{name}</p>
      <p>{rank}</p>
      <p>{weapon}</p>
      <p>{sqwad}</p>
    </div>
  );
}

