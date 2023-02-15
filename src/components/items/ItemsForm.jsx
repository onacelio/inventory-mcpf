import { useEffect, useState } from "react"
import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"

export default function ItemsForm({ btnText, inventoryData, handleSubmit }) {

    const [states, setStates] = useState([])
    const [item, setItem] = useState([])
    const [inventory, setInventory] = useState(inventoryData || [])

    useEffect(() => {
        fetch("http://localhost:5000/states", {
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        }).then((resp) => resp.json())
        .then((data) => {
            setStates(data)
        })
        .catch(err => console.log(err))
    }, [])

    function submit(e) {
        e.preventDefault()
        inventoryData.items.push(item)
        handleSubmit(inventoryData)
    }

    function handleChange(e) {
        setItem({ ...item, [e.target.name]: e.target.value })
    }

    function handleState(e) {
        setInventory({ ...item, state: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        } })
    }

    return (
        <form onSubmit={submit} className="w-full flex flex-col justify-center items-center">
            <Input 
                type="text"
                text="Nome do Item"
                name="name"
                placeholder="Insira o nome do item"
                handleOnChange={handleChange}
            />

            <Input 
                type="number"
                text="Quantidade do item"
                name="quantity"
                placeholder="Insira a quantidade exata do item"
                handleOnChange={handleChange}
            />

            <Input 
                type="text"
                text="Estado do item"
                name="state"
                placeholder="Insira o estado do item"
                handleOnChange={handleChange}
            />

            <SubmitButton 
                text={btnText}
            />
        </form>
    )
}