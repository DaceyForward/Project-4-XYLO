// import ToysIndex from "./toys/ToyIndex"
// import RotationsIndex from "./rotations/RotationIndex"
import { Container, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = (props) => {
	const { msgAlert, user } = props
	// console.log('props in home', props)

	const authenticatedOptions = (
		<Link to={'/sign-up'} className='info btn btn-info'>
			Sign Up Here!
		</Link>
	)

	return (
		<Container className='m-2' style={{ textAlign: 'center' }}>
			<h1>Welcome to Xylo</h1>
			<h3>The Digital Toy Box</h3>
			<br />
			<Row className='rowPhotos'>
			<Col xs={6} md={4}>
          		<Image className='shadow p-3 mb-5 bg-body-tertiary rounded' src="./images/train.png" thumbnail />
       		</Col>
			<Col xs={6} md={4}>
          		<Image className='shadow p-3 mb-5 bg-body-tertiary rounded' src="./images/toys.png" thumbnail />
       		</Col>
			<Col xs={6} md={4}>
          		<Image className='shadow p-3 mb-5 bg-body-tertiary rounded' src="./images/xylo.png" thumbnail />
       		</Col>
			</Row>
			<br />
			<Link to={'/about'} className='info btn btn-info'>
                Learn More!
            </Link>
			{/* <br />
			<br /> */}

			{user ? null : authenticatedOptions}

			{/* <Link to={'/sign-up'} className='info btn btn-info'>
                Sign Up Here!
            </Link> */}

		</Container>
	)
}

export default Home
