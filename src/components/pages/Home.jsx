import brasao from "../../img/brasao.png"
import LinkButton from "../layout/LinkButton"

export default function Home() {

    const user = JSON.parse(sessionStorage.getItem("@AuthFirebase:user"))
    console.log(user)

    return (
        <section className="mt-28 mb-2w-full flex items-center justify-center font-poppins p-14 h-heigth-90">
            <div className="w-full sm:w-6/12 ml-5 p-2">
                <h1 className="mb-5 text-3xl">Bem-Vindo <span className="text-mcpf-yellow font-bold uppercase">{user.displayName}</span></h1>
                <p className="mb-5 text-base">Comece a gerenciar almoxarifados agora mesmo!</p>
                <LinkButton to="/inventorys" text="VISUALIZAR INVENTÁRIOS"/>
            </div>
            <div className="w-6/12 hidden items-center justify-center sm:flex">
                <img src={brasao} alt="Brasão da MCPF" className="w-60"/>
            </div>
        </section>
    )
}