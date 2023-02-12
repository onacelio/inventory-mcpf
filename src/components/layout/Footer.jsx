import { Link } from "react-router-dom"
import { FaInstagram, FaYoutube } from "react-icons/fa"
import logo from "../../img/logo-simplificada.png"

export default function Footer() {
    return (
        <footer className="flex justify-between items-center p-8 bg-mcpf-green">
            <ul className="flex">
                <li className="mr-4 hover:text-mcpf-yellow duration-300">
                    <a href="http://instagram.com/eeep_mariacelia" target="_blank" rel="noreferrer"><FaInstagram className="text-2xl"/></a>
                </li>
                <li className="mr-4 hover:text-mcpf-yellow duration-300">
                    <a href="https://www.youtube.com/@EPMariaCelia" target="_blank" rel="noreferrer"><FaYoutube className="text-2xl"/></a>
                </li>
            </ul>
            <p className="font-poppins font-bold">
                <span className="text-mcpf-yellow">Inventory MCPF </span>&copy; 2023
            </p>
            <p>
                <Link to="/"><img src={logo} alt="logo MCPF" className="w-40" /></Link>
            </p>
        </footer>
    )
}