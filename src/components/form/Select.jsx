export default function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className="flex flex-col w-6/12 p-3 gap-2">
            <label htmlFor={name} className="uppercase text-base">{text}</label>
            <select 
                name={name} 
                id={name} 
                onChange={handleOnChange} 
                value={value || ""}
                className="rounded border-2 border-mcpf-green p-2 focus:border-black duration-300">
                <option>Selecione uma opção</option>
                {
                    options.map((option) => (
                        <option value={option.id} key={option.id}>{option.name}</option>
                    ))
                }
            </select>
        </div>
    )
}