import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//Componentes de layout
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";

//Componentes de páginas
import Home from "./components/pages/Home";
import Inventorys from "./components/pages/Inventorys";
import NewInventory from "./components/pages/NewInventory";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/inventorys" element={<Inventorys />} />
        <Route path="/about" element={<About />} />
        <Route path="/new-inventory" element={<NewInventory />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}
