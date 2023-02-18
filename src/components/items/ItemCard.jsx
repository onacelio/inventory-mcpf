import { BsFillTrashFill } from "react-icons/bs"

export default function ItemCard({ id, name, quantity, state, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className="p-3 flex flex-col border-mcpf-background rounded border-2 m-1 font-poppins">
            <h4 className="text-mcpf-yellow font-bold uppercase text-xl mb-2">{name}</h4>
            <p className="mb-2 uppercase font-normal">Quantidade: {quantity}</p>
            <p className="mb-2 uppercase font-normal">Estado: {state}</p>
            <div>
                <button onClick={remove} className="flex items-center gap-2">
                    <BsFillTrashFill />
                    Excluir item
                </button>
            </div>
        </div>
    )
}