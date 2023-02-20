import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import InventoryCard from "../inventory/InvetoryCard";
import LinkButton from "../layout/LinkButton";
import Loading from "../layout/Loading"
import Message from "../layout/Message";

export default function Inventorys() {

    const [inventorys, setInventorys] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [inventoryMessage, setInventoryMessage] = useState("")
    const user = JSON.parse(sessionStorage.getItem("@AuthFirebase:user"))

    const location = useLocation()
    let message = ""
    if(location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5000/inventorys", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((resp) => resp.json())
        .then((data) => {
            setInventorys(data)
            setRemoveLoading(true)
        })
        .catch(err => console.log(err))
        }, 300)
    }, [])

    function removeInventory(id) {
        fetch(`http://localhost:5000/inventorys/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resp => resp.json())
        .then(() => {
            setInventorys(inventorys.filter((inventory) => inventory.id !== id))
            setInventoryMessage("Inventário removido com sucesso")
        }).catch(err => console.log(err))
    }

    return (
        <section className="p-3 flex flex-col w-full min-h-screen">
            <div className="flex justify-between items-center p-5">
                { user.email.split("@")[1] !== "aluno.ce.gov.br" ? (
                    <><h1>INVENTÁRIOS</h1><LinkButton to="/new-inventory" text="CRIAR INVENTÁRIO" /></>)
                : <h1>INVENTÁRIOS</h1>
                }
            </div>

            { message &&
                <Message msg={message} type="bg-mcpf-green text-mcpf-text" />
            }
            { inventoryMessage &&
                <Message msg={inventoryMessage} type="bg-mcpf-green text-mcpf-text" />
            }

            <div className="flex flex-wrap max-w-full justify-start">
                {   inventorys.length > 0 &&
                    inventorys.map((inventory) => (
                        <InventoryCard 
                            id={inventory.id}
                            name={inventory.name}
                            locale={inventory.locale.name}
                            handleRemove={removeInventory}
                            key={inventory.id}
                        />
                    ))
                } 
                {   !removeLoading &&
                    <div className="w-full h-screen flex items-center justify-center">
                        <Loading text="Carregando inventários"/>
                    </div>
                }
                {   removeLoading && inventorys.length === 0 &&
                    (
                        <div className="w-full h-screen flex items-center justify-center">
                            <p className="text-mcpf-text text-3xl font-bold uppercase">Não há inventários cadastrados!</p>
                        </div>
                    )
                }
            </div>
        </section>
    )
}
