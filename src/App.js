import './App.scss';
import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Topnav from "./components/Topnav/Topnav";

import HomePage from "./pages/HomePage/HomePage";
import PlayPage from "./pages/PlayPage/PlayPage";


function App() {
  const [name, setName] = useState(null);

  useEffect(() => {
    if (!name) {
      const localName = localStorage.getItem("name");
      if (localName !== "null") {
        setName(localName);
      }
    } else {
      localStorage.setItem("name", name);
    }
  }, [name]);

  return (
    <HashRouter>
      <Topnav name={name} />
      <Routes>
        <Route path='/' 
          element={<HomePage name={name} setName={setName} /> }
        />
        <Route path="/play" element={<PlayPage />} />
      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App;
