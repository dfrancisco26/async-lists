import React from 'react';
import Beer from './Beer';

export default function BeersList({ beers = [], }) {
  return (
    <div className='beer-list'>
      {
        beers.map((beer, i) => {
          return <Beer {...beer} key={beer.name + i + beer.id} />;
        })
      }
    </div>
  );
}
