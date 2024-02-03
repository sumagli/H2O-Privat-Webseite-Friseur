import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';

import Imprint from './Components/Imprint/Imprint'
import Navbar from './Components/Navbar/Navbar';

import NewFooter from './Components/NewFooter/NewFooter';
import DataSecurity from './Components/DataSecurity/DataSecurity';


import Couch from './Assats/Images/Couch.png';
import Counter from './Assats/Images/Counter.jpg'
import Door from './Assats/Images/Door.jpg'
import React from 'react';
import MenuOverlay from './Components/MenuOverlay/MenuOverlay';




function App() {
  const [overlay, setOverlay] = React.useState(false);
  const [showOverlay, setShowOverlay] = React.useState(false);

  // Trigger the fade-out animation and delay the removal
  React.useEffect(() => {
    if (!overlay) {
      setTimeout(() => setShowOverlay(false), 300); // 300ms matches the CSS animation duration
    } else {
      setShowOverlay(true);
    }
  }, [overlay]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={
            <>
              <Navbar setOverlay={setOverlay} overlay={overlay} />

              <Home overlay={overlay} />
              {showOverlay &&
                <MenuOverlay setOverlay={setOverlay} overlay={overlay} />
              }
            </>
          }
        />

        <Route
          path="/Impressum"
          element={
            <>
              <Navbar setOverlay={setOverlay} overlay={overlay} />
              <Imprint />
            </>
          }
        />
        <Route
          path="/Datenschutz"
          element={
            <>
              <Navbar setOverlay={setOverlay} overlay={overlay} />
              <DataSecurity />
            </>
          }
        />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
