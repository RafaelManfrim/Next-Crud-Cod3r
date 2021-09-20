type InputProps = {
    type?: 'text' | 'number'
    name: string
    value: string | number
    onChange?: (e: any) => void
    readOnly?: boolean
}

export default function Input(props: InputProps){

    const id = `input-${props.name}`

    return (
        <div className="flex flex-col">
            <label className="p-2" htmlFor={id}>{props.name}:</label>
            <input 
                className={`border border-gray-400 rounded-lg p-2 focus:outline-none ${props.readOnly ? 'bg-gray-300' : 'focus:border-gray-700'}`} 
                type={props.type ?? 'text'} id={id} value={props.value} onChange={props.onChange} readOnly={props.readOnly}
            />
        </div>
    )
}