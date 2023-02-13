import brasao from "../../img/brasao.png"
import LinkButton from "../layout/LinkButton"

export default function Home() {
    return (
        <section className="mb-2w-full flex items-center justify-center font-poppins p-14 h-heigth-90">
            <div className="w-full sm:w-6/12 ml-5 p-2">
                <h1 className="mb-5 text-3xl">Bem-Vindo ao <span className="text-mcpf-yellow font-bold dark:text-mcpf-green">INVENTORY - MCPF</span></h1>
                <p className="mb-5 text-base">Comece a gerenciar almoxarifados agora mesmo!</p>
                <LinkButton to="/inventorys" text="VISUALIZAR INVENTÁRIOS"/>
            </div>
            <div className="w-6/12 hidden items-center justify-center sm:flex">
                <img src={brasao} alt="Brasão da MCPF" className="w-60"/>
            </div>
        </section>
    )
}