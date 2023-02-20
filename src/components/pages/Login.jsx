import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthGoogleContext } from "../../contexts/authGoogle"
import ButtonLoginWithGoogle from "../layout/ButtonLoginWithGoogle"
import brasao from "../../img/brasao.png"

export default function Login() {

    const { signInGoogle, signed } = useContext(AuthGoogleContext)

    async function loginGoogle() {
        await signInGoogle();
    }

    if(!signed) {
        return (
            <section className="w-full h-screen flex items-center justify-center gap-5 font-poppins p-14 h-heigth-90">
                <div className="w-full flex flex-col gap-5 sm:w-6/12 ml-5 p-5">
                    <h1 className="mb-5 text-5xl"><span className="text-mcpf-yellow font-bold">INVENTORY - MCPF</span></h1>
                    <p className="mb-5 text-3xl">Faça seu login para acessar a plataforma!</p>
                    <ButtonLoginWithGoogle text="Login com google" handleClick={loginGoogle} />
                </div>
                <div className="w-6/12 hidden items-center justify-center sm:flex">
                    <img src={brasao} alt="Brasão da MCPF" className="w-60" />
                </div>
            </section>
        )
    } else {
        return (
            <Navigate to="/home" />
        )
    }

}