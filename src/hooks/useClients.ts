import { useEffect, useState } from 'react'
import Client from '../model/Client'
import ClientRepository from '../core/ClientRepository'
import ClientCollection from '../db/ClientCollection'
import useMode from './useMode'

export default function useClients(){

    const { displayForm, formVisible, displayTable, tableVisible } = useMode()

    const repo: ClientRepository = new ClientCollection()

    const [client, setClient] = useState<Client>(Client.void())
    const [clients, setClients] = useState<Client[]>([])
    
    useEffect(getAll, [])
    
    function getAll(){
        repo.getAllClients().then(clients => {
            setClients(clients)
            displayTable
        })
    }
    
    function onClientEdit(client: Client){
        setClient(client)
        displayForm
    }
    
    async function onClientDelete(client: Client){
        await repo.deleteClient(client)
        getAll()
    }
    
    function newClient(){
        setClient(Client.void())
        displayForm
    }
    
    async function saveClient(client: Client){
        await repo.saveClient(client)
        getAll()
    }
    
    return {
        client: client,
        clients: clients,
        getAll,
        onClientEdit,
        onClientDelete,
        newClient,
        saveClient,
    }

}