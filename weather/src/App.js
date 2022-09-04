import React, { useState, createContext } from "react";
import "./App.css";
import Main from "./Component/Main";
import Search from "./Component/Search";
export const City = createContext();
function App() {
  const [login, setLogin] = useState(true);
  const [city, setCity] = useState();

  return (
    <>
      <City.Provider value={city}>
        
        {login ? <Search setLogin={setLogin} setCity={setCity} /> : <Main />}
      </City.Provider>
    </>
  );
}

export default App;
