import { Link } from "react-router-dom"

export default function LinkButton({ to, text }) {
    return(
        <Link to={to} className="bg-mcpf-green p-2 rounded-md hover:text-mcpf-yellow duration-300">
            {text}
        </Link>
    )
}