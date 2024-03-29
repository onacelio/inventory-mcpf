import { BsFillTrashFill } from "react-icons/bs"
import LinkButton from "../layout/LinkButton";

export default function InventoryCard({ id, name, locale, handleRemove}) {

    const user = JSON.parse(sessionStorage.getItem("@AuthFirebase:user"))
    
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    if(user.email.split("@")[1] !== "aluno.ce.gov.br") {
        return (
            <div className="p-3 flex flex-col border-mcpf-background rounded border-2 m-1 font-poppins">
                <h4 className="text-mcpf-yellow font-bold uppercase text-xl mb-2">
                    {name}
                </h4>
                <p className="mb-2 uppercase font-normal">Local: {locale}</p>
                <div className="flex p-3 uppercase items-start flex-col lg:flex-row md:items-center">
                    <LinkButton to={`/inventory/${id}`} text="itens" />
                    <LinkButton to={`/inventory/details/${id}`} text="DETALHES"/>
                    <button onClick={remove} className="ml-3 flex items-center p-2">
                        <BsFillTrashFill className="mr-2"/> Apagar
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="p-3 flex flex-col border-mcpf-background rounded border-2 m-1 font-poppins">
                <h4 className="text-mcpf-yellow font-bold uppercase text-xl mb-2">
                    {name}
                </h4>
                <p className="mb-2 uppercase font-normal">Local: {locale}</p>
                <div className="flex p-3 uppercase items-start flex-col lg:flex-row md:items-center">
                    <LinkButton to={`/inventory/${id}`} text="Itens do inventário" />
                </div>
            </div>
        )
    }
}