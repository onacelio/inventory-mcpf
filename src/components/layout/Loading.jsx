import loading from "../../img/loading.svg"

export default function Loading({ text }) {
    return (
        <div className="w-full h-full flex justify-center items-center gap-5">
            <p className="text-3xl uppercase">{text}</p><img src={loading} alt="loading" className="w-20"/>
        </div>
    )
}