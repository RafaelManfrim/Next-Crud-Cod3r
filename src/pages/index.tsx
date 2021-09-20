import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Form from '../components/Form'
import Button from '../components/Button'
import useClients from '../hooks/useClients'
import useMode from '../hooks/useMode'

const Home: NextPage = () => {

	const { tableVisible, displayTable } = useMode()
	const { client, clients, newClient, onClientEdit, onClientDelete, saveClient } = useClients()

	return (
		<div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-700 text-white">
			<Layout title='Simple Registration'>
				{tableVisible ? (
					<>
						<div className="flex justify-end">
							<Button cls='mb-4' color='blue' onClick={newClient}>New Client</Button>
						</div>
						<Table clients={clients} onClientEdit={onClientEdit} onClientDelete={onClientDelete}></Table>
					</>
				) : (
					<Form client={client} displayTable={displayTable} onClientChanged={saveClient}/>
				)}
			</Layout>
		</div>
	)
}

export default Home