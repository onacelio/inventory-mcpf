import { Link } from "react-router-dom"

export default function LinkButton({ to, text }) {
    return(
        <Link to={to} className="bg-mcpf-green p-2 rounded-md border-2 hover:text-mcpf-yellow hover:border-mcpf-yellow hover:bg-mcpf-background duration-300">
            {text}
        </Link>
    )
}