import "./leaflet.css";
import "./App.css";
import { Route, Routes } from "react-router";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
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
