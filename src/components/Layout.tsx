import { ReactNode } from 'react'
import Title from './Title'

type LayoutProps = {
    title: string
    children: ReactNode
}

export default function Layout(props: LayoutProps){
    return (
        <main className="flex flex-col w-2/3 bg-white text-gray-800 rounded-t-md">
            <Title>{props.title}</Title>
            <div className="p-6">
                {props.children}
            </div>
        </main>
    )
}