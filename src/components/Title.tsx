import { ReactNode } from "react"

type TitleProps = {
    children: ReactNode
}

export default function Title(props: TitleProps){
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-3 text-2xl">
                {props.children}:
            </h1>
            <hr className="border-2 border-purple-500"/>
        </div>
    )
}