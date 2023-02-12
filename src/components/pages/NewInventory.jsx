import { useNavigate } from "react-router-dom";
import NewInventoryForm from "../inventory/NewInventoryForm";

export default function NewInventory() {

    const navigate = useNavigate()

    function createPost(inventory) {
        inventory.items = []

        fetch("http://localhost:5000/inventorys", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inventory)
        }).then((resp) => resp.json())
        .then((data) => {
            navigate("/inventorys", {state: {message: "Inventário criado com sucesso!"}})
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="mb-2 w-full flex flex-col items-center font-poppins gap-6">
            <h1 className="text-3xl font-bold uppercase">Criar inventário</h1>
            <p>Crie o inventário para depois adicionar os itens</p>
            <NewInventoryForm handleSubmit={createPost} btnText="Criar Inventário"/>
        </div>
    )
}