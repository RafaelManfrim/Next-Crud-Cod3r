import { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode
    cls?: string
    color: 'green' | 'blue' | 'gray'
    onClick?: () => void
}

export default function Button(props: ButtonProps){

    const color = props.color ?? 'green'

    return (
        <button className={`bg-gradient-to-r from-${color}-400 to-${color}-700 hover:from-${color}-500 hover:to-${color}-800 text-white px-8 py-3 rounded-md outline-none ${props.cls}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}