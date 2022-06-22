import { useState, useEffect } from 'react';
import OrkzList from './OrkzList.js';
import BeersList from './BeersList.js';
import AlbumList from './AlbumList.js';
import './App.css';
import { getOrkz, getBeers, getAlbums } from './services/fetch-utils.js';
import LoadScreen from './LoadScreen.js';

// import your arrays here

function App() {



  const [orkz, setOrkz] = useState([]);
  const [isLoadingOrkz, setIsLoadingOrkz] = useState(false);
  const [beers, setBeers] = useState([]);
  const [albums, setAlbums] = useState([]);


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

  async function fetchAlbumData() {
    const data = await getAlbums();
    setAlbums(data);
  }

  useEffect(() => {
    fetchAlbumData();
  }, []);

  return (
    <div className="App">
      {isLoadingOrkz ? <LoadScreen /> : <OrkzList orkz = {orkz} /> }
      <BeersList beers = {beers} />
      <AlbumList albums = {albums} />
    </div>
  );
}

export default App;
