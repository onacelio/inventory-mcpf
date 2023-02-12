import { useEffect, useState } from "react"
import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"

export default function NewInventoryForm({ handleSubmit, btnText, inventoryData}) {

    const [locales, setLocales] = useState([])
    const [inventory, setInventory] = useState(inventoryData || [])

    useEffect(() => {
        fetch("http://localhost:5000/locales", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((resp) => resp.json())
        .then((data) => {
            setLocales(data)
        })
        .catch(err => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(inventory)
    }

    function handleChange(e) {
        setInventory({ ...inventory, [e.target.name]: e.target.value })
    }

    function handleLocale(e) {
        setInventory({ ...inventory, locale: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        } })
    }

    return (
        <form onSubmit={submit} className="w-6/12 flex flex-col justify-center items-center">
            <Input 
                type="text"
                text="Nome do Inventário"
                name="name"
                placeholder="Insira o nome do inventário"
                handleOnChange={handleChange}
                value={inventory.name ? inventory.name : ""}
            />
            <Select 
                name="locale_id"
                text="Selecione o local do inventário"
                options={locales}
                handleOnChange={handleLocale}
                value={inventory.locale ? inventory.locale.id : ""}
            />
            <SubmitButton 
                text={btnText}
            />
        </form>
    )
}