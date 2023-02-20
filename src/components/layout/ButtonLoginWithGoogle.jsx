import { BsGoogle } from "react-icons/bs"

export default function ButtonLoginWithGoogle({ handleClick, text}) {
    return (
        <button onClick={handleClick} className="w-6/12 bg-mcpf-green p-3 rounded-md border-2 flex items-center justify-center hover:text-mcpf-yellow hover:border-mcpf-yellow hover:bg-mcpf-background duration-300 border-black uppercase">
            <BsGoogle className="mr-4 w-5 text-white"/> {text}
        </button>
    )
}