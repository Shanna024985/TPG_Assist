import "./leaflet.css";
import "./App.css";
import { Route, Routes } from "react-router";

import Dashboard from "./loggedInScreen";
let currentUrl = "http://localhost:3000/api"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard currentUrl={currentUrl}/>} />
      </Routes>
    </>
  );
}

export default App;
