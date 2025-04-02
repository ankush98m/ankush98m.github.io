import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import NavbarBottom from "./components/NavbarBottom";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  // const location = useLocation();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Show NavbarBottom on all pages except Home */}
      {/* {location.pathname !== "/" && location.pathname !== "/Home" && <NavbarBottom />} */}
    </div>
  );
}

export default App;
