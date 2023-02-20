import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../items/ItemCard";
import Loading from "../layout/Loading";
import Message from "../layout/Message";

export default function Inventory() {

    const { id } = useParams()
    const [items, setItems] = useState([])
    const [inventory, setInventory] = useState([])
    const [message, setMessage] = useState("")
    const [removeLoading, setRemoveLoading] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/inventorys/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((resp) => resp.json())
        .then((data) => {
            setInventory(data)
            setItems(data.items)
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    }, [id])

    function removeItem(id) {
        setMessage("")
        const itemsUpdated = inventory.items.filter(
            (item) => item.id !== id
        )

        const inventoryUpdated = inventory

        inventoryUpdated.items = itemsUpdated

        fetch(`http://localhost:5000/inventorys/${inventoryUpdated.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inventoryUpdated)
        })
        .then((resp) => resp.json())
        .then((data) => {
            setInventory(inventoryUpdated)
            setItems(itemsUpdated)
            setMessage("Item removido com sucesso!")
        })
        .then(err => console.log(err))
    }

    return (
        <div className="p-3 flex flex-col w-full min-h-screen">
            {message && <Message type="bg-mcpf-green text-mcpf-text" msg={message}/>}
            <div className="flex flex-wrap max-w-full justify-start">
                { items.length > 0 &&
                    items.map((item) => (
                        <ItemCard 
                            id={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            state={item.state}
                            handleRemove={removeItem}
                            key={item.id}
                        />
                    ))
                }
                {   !removeLoading &&
                    (
                        <div className="w-full h-screen flex items-center justify-center">
                            <Loading text="Carregando items do inventário" />
                        </div>
                    )
                }
                { removeLoading && items.length === 0 &&
                    (
                        <div className="w-full h-screen flex items-center justify-center">
                            <p className="text-mcpf-text text-3xl font-bold uppercase">O inventário está vazio!</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}