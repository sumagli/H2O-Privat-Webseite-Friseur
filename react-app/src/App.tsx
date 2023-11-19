import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Imprint from './Components/Imprint/Imprint'
import Navbar from './Components/Navbar/Navbar';
import Experimental from './Components/Experimental/Experimental';
import TheIdea from './Components/TheIdea/TheIdea';
import NewFooter from './Components/NewFooter/NewFooter';
import Orbit from './Components/test/Orbit';
import MarsRetrogradeAnimation from './Components/MarsRetrogradeAnimation/MarsRetrogradeAnimation';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={
            <>
              <Experimental />
            </>
          }
        />
        <Route
          path="/Impressum"
          element={
            <>
              <Navbar />
              <Imprint />
            </>
          }
        />
        <Route path="/old"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="/DieIdee"
          element={
            <>
              <Navbar />
              <TheIdea />
              <NewFooter />
            </>
          }
        />
        <Route path="/test"
          element={
            <>
              <MarsRetrogradeAnimation />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
