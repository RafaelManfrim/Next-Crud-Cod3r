import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../model/Client'

const Home: NextPage = () => {

	const clients = [
		new Client('Ana Rita', 17, '1'),
		new Client('Rafael', 17, '2')
	]

	function onClientEdit(client: Client){

	}

	function onClientDelete(client: Client){

	}

	return (
		<div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-700 text-white">
			<Layout title='Simple Registration'>
				<Table clients={clients} onClientEdit={onClientEdit} onClientDelete={onClientDelete}></Table>
			</Layout>
		</div>
	)
}

export default Home