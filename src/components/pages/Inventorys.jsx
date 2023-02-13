import { useEffect, useState } from "react";
import InventoryCard from "../inventory/InvetoryCard";
import LinkButton from "../layout/LinkButton";
import Loading from "../layout/Loading"

export default function Inventorys() {

    const [inventorys, setInventorys] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

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
        }).catch(err => console.log(err))
    }

    return (
        <section className="p-3 w-full min-h-screen flex flex-col">
            <div className="flex justify-between items-center p-5">
                <h1>INVENTÁRIOS</h1>
                <LinkButton to="/new-inventory" text="CRIAR INVENTÁRIO"/>
            </div>
            <div className="flex flex-col justify-center sm:flex-row">
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
                    <Loading />
                }
                {   removeLoading && inventorys.length === 0 &&
                    (
                        <p>Não há inventários cadastrados!</p>
                    )
                }
            </div>
        </section>
    )
}
