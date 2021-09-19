import type { NextPage } from 'next'
import Layout from '../components/Layout'

const Home: NextPage = () => {
	return (
		<div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-700 text-white">
			<Layout title='Simple Registration'>
				<span>Content</span>
			</Layout>
		</div>
	)
}

export default Home