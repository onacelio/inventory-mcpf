export default function Input({ text, name, placeholder, handleOnChange, value }) {
    return (
        <div className="flex flex-col p-3 w-6/12 gap-2">
            <label htmlFor={name} className="uppercase text-base font-bold">{text}</label>
            <input 
                type={text}
                placeholder={placeholder}
                id={name}
                name={name}
                onChange={handleOnChange}  
                value={value}
                className="rounded border-2 border-mcpf-green p-2 focus:border-black duration-300"
            />
        </div>
    )
}