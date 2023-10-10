import ToysIndex from "./toys/ToyIndex"
import RotationsIndex from "./rotations/RotationIndex"
import { Container } from 'react-bootstrap'

const Home = (props) => {
	const { msgAlert, user } = props
	// console.log('props in home', props)

	return (
		<Container className='m-2' style={{ textAlign: 'center' }}>
			<h2>See All The Toys</h2>
			<ToysIndex msgAlert={msgAlert} />
			<h2>See All Your Rotations</h2>
			<RotationsIndex msgAlert={msgAlert} />
		</Container>
	)
}

export default Home
