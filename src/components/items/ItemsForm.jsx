import { useState } from "react"
import { useParams } from "react-router-dom"
import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"

export default function ItemsForm({ btnText, inventoryData, handleSubmit }) {

    const [states, setStates] = useState([])

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

    function submit(e) {
        e.preventDefault()
    }

    function handleChange() {

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
                name="name"
                placeholder="Insira a quantidade exata do item"
                handleOnChange={handleChange}
            />

            <Select 
                name="locale_id"
                text="Selecione o estado do item"
                options={states}
                handleOnChange={handleStateItem}
            />

            <SubmitButton 
                text={btnText}
            />
        </form>
    )
}