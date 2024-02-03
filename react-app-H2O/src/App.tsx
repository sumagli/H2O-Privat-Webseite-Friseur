import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';

import Imprint from './Components/Imprint/Imprint'
import Navbar from './Components/Navbar/Navbar';

import DataSecurity from './Components/DataSecurity/DataSecurity';

import React from 'react';
import MenuOverlay from './Components/MenuOverlay/MenuOverlay';
import Vita from './Components/Vita/Vita';

import Iris from './Assats/Images/Iris.png';
import Sabiene from './Assats/Images/Sabiene.png';
import Ilona from './Assats/Images/Ilona.png';
import NewFooter from './Components/NewFooter/NewFooter';


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

  const irisTimeline = [
    { year: "1989 - 1990", content: "1-jährige Berufsfachschule im Hoppenlau Stuttgart" },
    { year: "1990 - 1992", content: "2. + 3. Ausbildungsjahr zur Friseurin im Salon Edy Charly - Creativ Coiffeur, Stuttgart. Abschluss Gesellenprüfung mit Auszeichnung für besondere Leistungen" },
    { year: "1992 - 1995", content: "3 Gesellenjahre bei Edy Charly - Creativ Coiffeur" },
    { year: "1995", content: "1-jährige Abendschule im FBZ, Stuttgart. Abschluss der Meisterprüfung" },
    { year: "1995 - 1998", content: "Topstylistin bei Edy Charly - Creativ Coiffeur" },
    { year: "1998", content: "Dieter Keller Team Stuttgart" },
    { year: "1998 - 1999", content: "Topstylistin bei Edy Charly - Creativ Coiffeur" },
    { year: "1999", content: "Gründung Salon Haar Zwei Ooh gemeinsam mit Sabine Gehlen" },
    { year: "1999", content: "Eintrag in die Handwerksrolle" },
    { year: "1999 - 2009", content: "Selbstständige Friseurmeisterin und Ausbilderin" },
    { year: "2010", content: "Geburt Emil Julius" },
    { year: "1992 - 2012", content: "diverse Schulungen und Praktikas, bei Rene Asch, Pivot Point, Dieter Keller Team, Brockmann & Knödler, Kadus, Wella Studios" },
    { year: "2012", content: "Geburt Matilda Coco" },
    { year: "2019", content: "20-jähriges Bestehen HAAR ZWEI OOH" }
  ];


  const sabieneTimeline = [
    { year: "1988 - 1991", content: "3 - jährige Ausbildung im Salon Marlies Möller in Hamburg" },
    { year: "1991 - 1992", content: "1. Gesellenjahr als Stylistin beim Dieter Keller Team, Assistentin bei Salonschulungen" },
    { year: "1992 - 1995", content: "Top-Stylistin im Salon Cutart, M. Jörke, Stuttgart" },
    { year: "1995", content: "1 - jährige Abendschule im FBZ Stuttgart, Abschluss der Meisterschule" },
    { year: "1995 - 1999", content: "Meisterin im Salon Cutart, M. Jörke, Stuttgart, Ausbilderin" },
    { year: "1991 -1999", content: "freiberuflich tätig bei Fa. Kadus für Salonschulungen und Shows" },
    { year: "1999", content: "Gründung Salon Haar Zwei Ooh gemeinsam mit Iris Eiblmeier" },
    { year: "1999", content: "Eintrag in die Handwerksrolle" },
    { year: "1999 - 2009", content: "selbstständige Friseurmeisterin und Ausbilderin" },
    { year: "1992 - 2012", content: "diverse Schulungen und Praktikas: Dieter Keller Team, Wella, Goldwell, Loreal, Kadus, Glynt, Brockmann & Knödler" }
  ];


  const ilonaTimeline = [
    { year: "1992", content: "Meisterprüfung im FriseurHandwerk, Weiden/Oberpfalz" },
    { year: "1992 - 1999", content: "Friseurmeisterin Regensburg" },
    { year: "1999 - 2001", content: "Ausbildung FotoDesign, Esslingen am Neckar" },
    { year: "2001 - 2007", content: "Fotojournalistin Stuttgart" },
    { year: "2007 - 2019", content: "freie Fotografin Stuttgart" },
    { year: "2014 - 2016", content: "Friseurmeisterin Haar Zwei Ooh" },
    { year: "2017 - 2019", content: "Stylistin und Rezeptionistin, Haar Ramp Stuttgart" },
    { year: "2019", content: "Eintrag in die Handwerksrolle" },
    { year: "ab 01.10.2019", content: "selbstständige Friseurin im Haar Zwei OOH Team" },
  ];

  const imageIris = [
    { imgPath: Iris },
  ];

  const imageSabine = [
    { imgPath: Sabiene },
  ];

  const imageIlona = [
    { imgPath: Ilona },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={
            <>
              <Navbar mainPage={true} setOverlay={setOverlay} overlay={overlay} />

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
              <Navbar mainPage={false} setOverlay={setOverlay} overlay={overlay} />
              <Imprint />
            </>
          }
        />
        <Route
          path="/Datenschutz"
          element={
            <>
              <Navbar mainPage={false} setOverlay={setOverlay} overlay={overlay} />
              <DataSecurity />

            </>
          }
        />
        <Route
          path="/Vita-Iris"
          element={
            <>
              <Navbar mainPage={false} setOverlay={setOverlay} overlay={overlay} />
              <Vita email={"iris.eiblmeier@t-online.de"} name={"Iris Eiblmeier"} profession={"Friseurmeisterin"} image={imageIris} timelineEvents={irisTimeline} />

            </>
          }
        />
        <Route
          path="/Vita-Sabiene"
          element={
            <>
              <Navbar mainPage={false} setOverlay={setOverlay} overlay={overlay} />
              <Vita email={"sabinegehlen2307@gmail.com"} name={"Sabine Gehlen-Teshome"} profession={"Friseurmeisterin"} image={imageSabine} timelineEvents={sabieneTimeline} />

            </>
          }
        />
        <Route
          path="/Vita-Ilona"
          element={
            <>
              <Navbar mainPage={false} setOverlay={setOverlay} overlay={overlay} />
              <Vita email={"ilona@foto-scheffbuch.de"} name={"Ilona Scheffbuch"} profession={"Friseurmeisterin & Fotografin"} image={imageIlona} timelineEvents={ilonaTimeline} />

            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
