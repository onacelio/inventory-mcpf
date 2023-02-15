import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemsForm from "../items/ItemsForm";
import { parse, v4 as uuidv4 } from "uuid"

export default function AddItemInInventory() {

    const { id } = useParams()
    const [inventory, setInvetory] =  useState([])
    const [items, setItems] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/inventorys/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
            }).then((resp) => resp.json())
            .then((data) => {
                setInvetory(data)
                setItems(data.services)
            })
            .catch((err) => console.log(err))
        }, 300)
    }, [id])

    function createItem(inventory) {
        const lastItem = inventory.items[inventory.items.length - 1]
        lastItem.id = uuidv4()

        fetch(`http://localhost:5000/inventorys/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inventory)
        }).then((resp) => resp.json())
        .catch(err => console.log(err))
    }

    return (
        <div className="h-heigth-90 flex">
            <ItemsForm 
                handleSubmit={createItem}
                btnText="Adicionar item"
                inventoryData={inventory}
            />
        </div>
    )
}
