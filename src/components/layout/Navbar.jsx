import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import logo from "../../img/logo-simplificada.png"
import { HiMenu, HiOutlineX } from "react-icons/hi"

export default function Navbar() {

    const { signed, signOut } = useContext(AuthGoogleContext)

    const [open, setOpen] = useState(false)

    if(signed) {
        return (
            <nav className="max-h-60 shadow-md w-full bg-mcpf-green fixed top-0 left-0 mb-10">
                <div className='flex items-center justify-center md:flex items-center justify-between bg-mcpf-green py-4 md:px-10 px-7'>
               <Link to="/home" className="font-poppins font-bold sm:flex"><img src={logo} alt="logo" className="w-40"/></Link>

                <div onClick={()=>setOpen(!open)} className='text-4xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    {open ? <HiOutlineX /> : <HiMenu />}
                </div>

               <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-mcpf-green md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                        <li className="md:ml-8 text-xl md:my-0 my-7"><Link to="/home" className="hover:text-mcpf-yellow duration-300">INICIO</Link></li>
                        <li className="md:ml-8 text-xl md:my-0 my-7"><Link to="/inventorys" className="hover:text-mcpf-yellow duration-300">INVENTÁRIOS</Link></li>
                        <li className="md:ml-8 text-xl md:my-0 my-7"><Link to="/about" className="hover:text-mcpf-yellow duration-300">SOBRE</Link></li>
                        <li onClick={signOut} className="md:ml-8 text-xl md:my-0 my-7 hover:text-mcpf-yellow duration-300 cursor-pointer">
                            LOGOUT
                        </li>
                </ul>
                </div>
            </nav>
        )
    }
}