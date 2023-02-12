export default function SubmitButton({ text }) {
    return (
        <div className="flex w-3/12">
            <button className="bg-mcpf-green p-2 rounded-md hover:text-mcpf-yellow duration-300 w-full">{text}</button>
        </div>
    )
}