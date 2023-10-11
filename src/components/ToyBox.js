import ToysIndex from "./toys/ToyIndex"
import { Container } from 'react-bootstrap'

const ToyBox = (props) => {
	const { msgAlert, user } = props
	// console.log('props in home', props)

	return (
		<Container className='m-2' style={{ textAlign: 'center' }}>
			<h1>Xylo Toy Box</h1>
			<ToysIndex msgAlert={msgAlert} />
		</Container>
	)
}

export default ToyBox