import { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode
    cls?: string
    color: 'green' | 'blue' | 'gray'
}

export default function Button(props: ButtonProps){

    const color = props.color ?? 'green'

    return (
        <button className={`bg-gradient-to-r from-${color}-400 to-${color}-700 hover:from-${color}-500 hover:to-${color}-800 text-white px-4 py-2 rounded-md outline-none ${props.cls}`}>
            {props.children}
        </button>
    )
}