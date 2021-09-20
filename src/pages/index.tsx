import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Form from '../components/Form'
import Button from '../components/Button'
import Client from '../model/Client'
import { useEffect, useState } from 'react'
import ClientRepository from '../core/ClientRepository'
import ClientCollection from '../db/ClientCollection'

const Home: NextPage = () => {

	const repo: ClientRepository = new ClientCollection()

	const [client, setClient] = useState<Client>(Client.void())
	const [clients, setClients] = useState<Client[]>([])
	const [mode, setMode] = useState<'table' | 'form'>('table')

	useEffect(getAll, [])

	function getAll(){
		repo.getAllClients().then(clients => {
			setClients(clients)
			setMode('table')
		})
	}

	function onClientEdit(client: Client){
		setClient(client)
		setMode('form')
	}

	async function onClientDelete(client: Client){
		await repo.deleteClient(client)
		getAll()
	}

	function switchToTable(){
		getAll()
	}

	function newClient(){
		setClient(Client.void())
		setMode('form')
	}

	async function saveClient(client: Client){
		await repo.saveClient(client)
		getAll()
	}

	return (
		<div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-700 text-white">
			<Layout title='Simple Registration'>
				{mode === 'table' ? (
					<>
						<div className="flex justify-end">
							<Button cls='mb-4' color='blue' onClick={newClient}>New Client</Button>
						</div>
						<Table clients={clients} onClientEdit={onClientEdit} onClientDelete={onClientDelete}></Table>
					</>
				) : (
					<Form client={client} switchToTable={switchToTable} onClientChanged={saveClient}/>
				)}
			</Layout>
		</div>
	)
}

export default Home