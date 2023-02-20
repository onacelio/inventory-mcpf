import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import logo from "../../img/logo-simplificada.png"

export default function Navbar() {

    const { signed, signOut } = useContext(AuthGoogleContext)
    const user = JSON.parse(sessionStorage.getItem("@AuthFirebase:user"))

    if(signed) {
        return (
            <nav className="flex justify-between w-full p-8 bg-mcpf-green mb-2">
                <div className="flex justify-between w-screen items-center mx-4">
                    <Link to="/home" className="hidden font-poppins font-bold sm:flex"><img src={logo} alt="logo" className="w-40"/></Link>
                    <ul className="flex items-center">
                        <li className="mr-6"><Link to="/home" className="hover:text-mcpf-yellow duration-300">INICIO</Link></li>
                        <li className="mr-6"><Link to="/inventorys" className="hover:text-mcpf-yellow duration-300">INVENTÁRIOS</Link></li>
                        <li className="mr-6"><Link to="/about" className="hover:text-mcpf-yellow duration-300">SOBRE</Link></li>
                        <li onClick={signOut} className="hover:text-mcpf-yellow duration-300 cursor-pointer">LOGOUT</li>
                        <li><img src={user.photoURL} alt="Imagem do google" className="ml-6 w-5/12 rounded-full border-2 border-mcpf-yellow"/></li>
                    </ul>
                </div>
            </nav>
        )
    }
}