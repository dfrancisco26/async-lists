import { useState } from 'react';
import Ork from './Ork.js';
import OrkzList from './OrkzList.js';
import './App.css';
// import your arrays here

function App() {

  const [orkz, setOrkz] = useState([]);
  const [isLoadingOrkz, setIsLoadingOrkz] = useState(false);




  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <OrkzList />
    </div>
  );
}

export default App;
