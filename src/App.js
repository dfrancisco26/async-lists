import { useState, useEffect } from 'react';
import OrkzList from './OrkzList.js';
import BeersList from './BeersList.js';
import './App.css';
import { getOrkz, getBeers } from './services/fetch-utils.js';
import LoadScreen from './LoadScreen.js';

// import your arrays here

function App() {



  const [orkz, setOrkz] = useState([]);
  const [isLoadingOrkz, setIsLoadingOrkz] = useState(false);
  const [beers, setBeers] = useState([]);



  async function fetchOrkzData() {
    setIsLoadingOrkz(true);
    const data = await getOrkz();
    setIsLoadingOrkz(false);
    setOrkz(data);
  }

  useEffect(() => {
    fetchOrkzData();
  }, []);

  async function fetchBeerData() {
    const data = await getBeers();
    setBeers(data);
  }

  useEffect(() => {
    fetchBeerData();
  }, []);


  return (
    <div className="App">
      {isLoadingOrkz ? <LoadScreen /> : <OrkzList orkz = {orkz} /> }
      <BeersList beers = {beers} />
    </div>
  );
}

export default App;
