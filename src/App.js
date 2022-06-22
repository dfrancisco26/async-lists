import { useState, useEffect } from 'react';
import OrkzList from './OrkzList.js';
import './App.css';
import { getOrkz } from './services/fetch-utils.js';
import LoadScreen from './LoadScreen.js';

// import your arrays here

function App() {



  const [orkz, setOrkz] = useState([]);
  const [isLoadingOrkz, setIsLoadingOrkz] = useState(false);

  async function fetchOrkzData() {
    setIsLoadingOrkz(true);
    const data = await getOrkz();
    setIsLoadingOrkz(false);
    setOrkz(data);
  }

  useEffect(() => {
    fetchOrkzData();
  }, []);

  return (
    <div className="App">
      {isLoadingOrkz ? <LoadScreen /> : <OrkzList orkz = {orkz} /> }
    </div>
  );
}

export default App;
