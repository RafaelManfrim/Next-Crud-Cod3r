import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Form from '../components/Form'
import Button from '../components/Button'
import Client from '../model/Client'
import { useState } from 'react'

const Home: NextPage = () => {

	const [client, setClient] = useState<Client>(Client.void())
	const [mode, setMode] = useState<'table' | 'form'>('table')

	const clients = [
		new Client('Ana Rita', 17, '1'),
		new Client('Rafael', 17, '2')
	]

	function onClientEdit(client: Client){
		setClient(client)
		setMode('form')
	}

	function onClientDelete(client: Client){
		setClient(client)
	}

	function switchToTable(){
		setMode('table')
	}

	function newClient(){
		setClient(Client.void())
		setMode('form')
	}

	function saveClient(client: Client){
		console.log(client)
		setMode('table')
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