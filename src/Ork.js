import React from 'react';

export default function Ork({ name, rank, weapon, sqwad }) {
  return (
    <div className='ork'>
      <p>Name: {name}</p>
      <p>Rank: {rank}</p>
      <p>Weapon: {weapon}</p>
      <p> Sqwad: {sqwad}</p>
    </div>
  );
}

