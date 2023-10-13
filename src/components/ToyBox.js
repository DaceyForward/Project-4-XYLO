import ToysIndex from "./toys/ToyIndex"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import ToyCreate from './components/toys/ToyCreate'
// import { createToys } from '../../api/toy'

const ToyBox = (props) => {
	const { msgAlert, user } = props
	// console.log('props in home', props)

	return (
		<Container className='m-2' style={{ textAlign: 'center' }}>
			<h1>Xylo Toy Box</h1>
			{/* <br /> */}
			{/* <Link to={'/toys'} className='info btn btn-info'>
                Sign Up Here!
            </Link> */}
			{/* <Link to='/create-toy' className='newToy btn btn-info'>
				Add A New Toy
			</Link> */}
			{/* <br /> */}
			<br />
			<ToysIndex msgAlert={msgAlert} />
		</Container>
	)
}

export default ToyBox