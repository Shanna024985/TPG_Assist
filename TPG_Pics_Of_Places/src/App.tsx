import "./leaflet.css";
import "./App.css";
import { Route, Routes } from "react-router";

import Dashboard from "./loggedInScreen";
let currentUrl = "https://tpg-assist.vercel.app/api"

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
