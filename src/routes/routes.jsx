import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "../components/pages/Login"
import Home from "../components/pages/Home"
import Inventorys from "../components/pages/Inventorys"
import About from "../components/pages/About"
import NewInventory from "../components/pages/NewInventory"
import Inventory from "../components/pages/Inventory"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import PrivateRoutes from "."
import DetailsInventory from "../components/pages/DetailsInventory"

export default function AppRoutes() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/home" element={<PrivateRoutes />}>
                    <Route path="/home" element={<Home />} />
                </Route>
                <Route path="/inventorys" element={<PrivateRoutes />}>
                    <Route path="/inventorys" element={<Inventorys />} />
                </Route>
                <Route path="/about" element={<PrivateRoutes />}>
                    <Route path="/about" element={<About />} />
                </Route>
                <Route path="/new-inventory" element={<PrivateRoutes />}>
                    <Route path="/new-inventory" element={<NewInventory />} />
                </Route>
                <Route path="/inventory/:id" element={<PrivateRoutes />}>
                    <Route path="/inventory/:id" element={<Inventory />} />
                </Route>
                <Route path="/inventory/details/:id" element={<PrivateRoutes />}>
                    <Route path="/inventory/details/:id" element={<DetailsInventory />} />
                </Route>
            </Routes>
            
            <Footer />
        </Router>
    )
}