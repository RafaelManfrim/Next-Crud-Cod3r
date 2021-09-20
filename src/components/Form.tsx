import { useState } from 'react'
import Client from '../model/Client'
import Input from './Input'
import Button from './Button'

type FormProps = {
    client?: Client
    onClientChanged?: (client: Client) => void
    switchToTable: () => void
}

export default function Form(props: FormProps){

    const [name, setName] = useState(props.client ? props.client.name : '')
    const [age, setAge] = useState(props.client ? props.client.age : '0')

    return (
        <div className="bg-gray-200 p-4">
            {props.client?.id ? (
                <Input name='Id' value={props.client.id} readOnly/>
            ) : false}
            <Input name='Name' value={name} onChange={e => setName(e.target.value)}/>
            <Input name='Age' type='number' value={age} onChange={e => setAge(e.target.value)}/>
            <div className='flex justify-end mt-4'>
                <Button color='green' cls='mr-2' onClick={() => props.onClientChanged?.(new Client(name, +age, props.client?.id))}>{props.client?.id ? 'Change' : 'Save'}</Button>
                <Button color='gray' onClick={props.switchToTable}>Cancel</Button>
            </div>
        </div>
    )
}