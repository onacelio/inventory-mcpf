import loading from "../../img/loading.svg"

export default function Loading() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <img src={loading} alt="loading" className="w-40"/>
        </div>
    )
}