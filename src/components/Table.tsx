import Client from '../model/Client'
import { EditIcon, TrashIcon } from './Icons'

type TableProps = {
    clients: Client[]
    onClientEdit: (client: Client) => void
    onClientDelete: (client: Client) => void
}

export default function Table(props: TableProps){

    function renderData(){
        return props.clients?.map((client, i) => {
            return (
                <tr key={`${client.id}-${i}`} className={`${i % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'}`}>
                    <td className="p-4">{client.id}</td>
                    <td className="p-4">{client.name}</td>
                    <td className="p-4">{client.age}</td>
                    <td className="p-4 flex justify-center">
                        <button className="text-green-600 rounded-full hover:bg-gray-50 p-2" onClick={() => props.onClientEdit(client)}>{EditIcon}</button>
                        <button className='text-red-600 rounded-full hover:bg-gray-50 p-2' onClick={() => props.onClientDelete(client)}>{TrashIcon}</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <table className='w-full'>
            <thead className='bg-gradient-to-r from-purple-500 to-purple-800 text-gray-200 text-left text-xl font-semibold'>
                <th className='p-4'>Id</th>
                <th className='p-4'>Name</th>
                <th className='p-4'>Age</th>
                <th className='p-4 text-center'>Actions</th>
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}