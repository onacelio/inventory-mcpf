import { useEffect, useState } from "react";
import InventoryCard from "../inventory/InvetoryCard";
import LinkButton from "../layout/LinkButton";

export default function Inventorys() {

    const [inventorys, setInventorys] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/inventorys", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((resp) => resp.json())
        .then((data) => {
            setInventorys(data)
        })
        .catch(err => console.log(err))
    }, [])

    function removeInventory() {
        console.log("Função para remover inventários")
    }

    return (
        <section>
            <div className="flex justify-between items-center p-5">
                <h1>INVENTÁRIOS</h1>
                <LinkButton to="/new-inventory" text="CRIAR INVENTÁRIO"/>
            </div>
            <div>
                {   inventorys.length > 0 &&
                    inventorys.map((inventory) => (
                        <InventoryCard 
                            id={inventory.id}
                            name={inventory.name}
                            locale={inventory.locale.name}
                            handleRemove={removeInventory}
                        />
                    ))
                } 
                {   inventorys.length == 0 &&
                    <p>Não existe inventários</p>
                }
            </div>
        </section>
    )
}
