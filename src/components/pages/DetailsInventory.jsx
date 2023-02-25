import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemsForm from "../items/ItemsForm";
import { v4 as uuidv4 } from "uuid"
import Message from "../layout/Message";
import NewInventoryForm from "../inventory/NewInventoryForm";
import Loading from "../layout/Loading";
import ItemCard from "../items/ItemCard";

export default function DetailsInventory() {

    const { id } = useParams()
    const [inventory, setInvetory] =  useState([])
    const [items, setItems] = useState([])
    const [showInventoryForm, setShowInventoryForm] = useState(false)
    const [showItemForm, setShowItemForm] = useState(false)
    const [showItems, setShowItems] = useState(false)
    const [message, setMessage] = useState("")

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
                setItems(data.items)
            })
            .catch((err) => console.log(err))
        }, 300)
    }, [id])

    function editPost(inventory) {
        setMessage("")

        fetch(`http://localhost:5000/inventorys/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(inventory)
        })
        .then((resp) => resp.json())
        .then((data) => {
            setInvetory(data)
            setShowInventoryForm(false)
            setMessage("Inventário atualizado com sucesso!")
        })
        .catch(err => console.log(err))
    }

    function createItem(inventory) {
        setMessage("")

        const lastItem = inventory.items[inventory.items.length - 1]
        lastItem.id = uuidv4()

        fetch(`http://localhost:5000/inventorys/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inventory)
        }).then((resp) => resp.json())
        .then(() => {
            setShowItemForm(false)
            setMessage("Item adicionado ao inventário com sucesso!")
        })
        .catch(err => console.log(err))
    }

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
            setInvetory(inventoryUpdated)
            setItems(itemsUpdated)
            setMessage("Item removido com suceso!")
        })
        .catch(err => console.log(err))
    }

    function toggleItemForm() {
        setShowItemForm(!showItemForm)
    }

    function toggleInventoryForm() {
        setShowInventoryForm(!showInventoryForm)
    }

    function toggleItems() {
        setShowItems(!showItems)
    }

    return (
        <div className="min-h-screen mt-28 p-5 w-full">
            {inventory.name ? (
                    <div className="flex flex-col">
                        {message && <Message type="bg-mcpf-green text-mcpf-text" msg={message} />}
                        <div className="flex justify-between items-center p-4">
                            <h1 className="text-mcpf-yellow font-bold uppercase text-xl mb-2">Inventário: {inventory.name}</h1>
                            <button onClick={toggleInventoryForm} className="bg-mcpf-green p-3 rounded-md border-2 flex items-center justify-center hover:text-mcpf-yellow hover:border-mcpf-yellow hover:bg-mcpf-background duration-300 border-black uppercase">
                                { !showInventoryForm ? "Editar inventário" : "Fechar" }
                            </button>
                        </div>
                        {!showInventoryForm ? (
                                <div className="w-full p-4 uppercase">
                                    <p className="mb-3 font-bold">Local: <span className="font-normal">{inventory.locale.name}</span></p>
                                    <p className="mb-3 font-bold">Quantidade de itens: <span className="font-normal">{inventory.items.length}</span></p>
                                </div>
                            ) : (
                                <div>
                                    <NewInventoryForm handleSubmit={editPost} btnText="Concluir edição" inventoryData={inventory}/>
                                </div>
                        )}
                        <div className="flex justify-between items-center p-4">
                            <h2 className="text-mcpf-yellow font-bold uppercase text-base mb-2">Adicione um item: </h2>
                            <button onClick={toggleItemForm} className="bg-mcpf-green p-3 rounded-md border-2 flex items-center justify-center hover:text-mcpf-yellow hover:border-mcpf-yellow hover:bg-mcpf-background duration-300 border-black uppercase">
                                { !showItemForm ? "Adicionar um item" : "Fechar" }
                            </button>
                        </div>
                        { showItemForm && (
                            <ItemsForm 
                                handleSubmit={createItem}
                                btnText="Adicionar item"
                                inventoryData={inventory}
                            />
                        )}

                        <div className="p-4 flex justify-between items-center">
                            <h2 className="text-mcpf-yellow font-bold uppercase text-base mb-2">Itens do inventário: </h2>
                            <button onClick={toggleItems} className="bg-mcpf-green p-3 rounded-md border-2 flex items-center justify-center hover:text-mcpf-yellow hover:border-mcpf-yellow hover:bg-mcpf-background duration-300 border-black uppercase">
                                { !showItems ? "Visualizar itens" : "Fechar" }
                            </button>
                        </div>
                       {showItems && ( <div className="flex flex-wrap max-w-full justify-start">
                            {items.length > 0 ?
                                items.map((item) => (
                                    <div className="flex flex-wrap max-w-full justify-start">
                                        <ItemCard 
                                            id={item.id}
                                            name={item.name}
                                            quantity={item.quantity}
                                            state={item.state}
                                            handleRemove={removeItem}
                                            key={item.id}
                                        />
                                    </div>
                                )) : (
                                    <p>Não há itens no inventário!</p>
                                )
                            }
                        </div>)}
                    </div>
                ) : (
                    <Loading text="Carregando detalhes" />
                )
            }
        </div>
    )
}


/*
    <div className="mt-28 h-heigth-90 flex flex-col justify-center items-center">
            { message &&
                <Message msg={message} type="bg-mcpf-green text-mcpf-text" />
            }
            <ItemsForm 
                handleSubmit={createItem}
                btnText="Adicionar item"
                inventoryData={inventory}
            />
    </div>
*/