import { Link } from "react-router-dom";
import { BsAd, BsFillTrashFill } from "react-icons/bs"

export default function InventoryCard({ id, name, locale, handleRemove}) {

    // const remove = (e) => {
    //     e.preventDefault()
    //     handleRemove(id)
    // }

    return (
        <div>
            <h4>
                {name}
            </h4>
            <p>Local: {locale}</p>
            <div>
                <Link to={`/inventory/${id}`}>
                </Link>
            </div>
        </div>
    )
}