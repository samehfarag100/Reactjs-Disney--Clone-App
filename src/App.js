import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginComponents from "./components/login/LoginComponents";
import NavbarComponents from "./components/navbar/NavbarComponents";
import HomeComponents from "./components/home/HomeComponents";
import DetailsComponents from "./components/details/DetailsComponents";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponents />
        <Routes>
          <Route exact path="/" element={<LoginComponents />} />
          <Route exact path="/home" element={<HomeComponents />} />
          <Route exact path="/details/:id" element={<DetailsComponents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
