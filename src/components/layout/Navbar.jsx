import { Link } from "react-router-dom";
import logo from "../../img/logo-simplificada.png"

export default function Navbar() {
    return (
        <nav className="flex justify-between w-full p-8 bg-mcpf-green mb-2">
            <div className="flex justify-between w-screen items-center mx-4">
                <Link to="/" className="hidden font-poppins font-bold sm:flex"><img src={logo} alt="logo" className="w-40"/></Link>
                <ul className="flex">
                    <li className="mr-6"><Link to="/" className="hover:text-mcpf-yellow duration-300">INICIO</Link></li>
                    <li className="mr-6"><Link to="/inventorys" className="hover:text-mcpf-yellow duration-300">INVENTÁRIOS</Link></li>
                    <li className="mr-6"><Link to="/about" className="hover:text-mcpf-yellow duration-300">SOBRE</Link></li>
                </ul>
            </div>
        </nav>
    )
}