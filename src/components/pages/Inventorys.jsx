import LinkButton from "../layout/LinkButton";

export default function Inventorys() {
    return (
        <section>
            <div className="flex justify-between items-center p-5">
                <h1>INVENTÁRIOS</h1>
                <LinkButton to="/new-inventory" text="CRIAR INVENTÁRIO"/>
            </div>
        </section>
    )
}
