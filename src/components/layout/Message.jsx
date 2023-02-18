import { useEffect, useState } from "react"

export default function Message({ type, msg }) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {

        if(!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => setVisible(false), 3000)

        return () => clearTimeout(timer)

    }, [msg])

    return (
        <>
            { visible &&
                <div className={`w-full p-2 border-2 mb-2 rounded text-center ${type}`}>
                    {msg}
                </div>
            }
        </>
    )
}