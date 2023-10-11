// import ToysIndex from "./toys/ToyIndex"
// import RotationsIndex from "./rotations/RotationIndex"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = (props) => {
	const { msgAlert, user } = props
	// console.log('props in home', props)

	return (
		<Container className='m-2' style={{ textAlign: 'center' }}>
			<h1>Welcome To Xylo</h1>
			<h3>The Digital Toy Box</h3>
			<Link to={'/about'} className='btn btn-info'>
                Learn More!
            </Link>
			<br />
			<br />
			<Link to={'/sign-up'} className='btn btn-info'>
                Sign Up Here
            </Link>
		</Container>
	)
}

export default Home
