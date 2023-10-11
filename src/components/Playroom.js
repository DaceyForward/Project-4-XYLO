import RotationsIndex from "./rotations/RotationIndex"
import ToysIndex from "./toys/ToyIndex"
import { Container } from 'react-bootstrap'
// import { indexToys } from '../../api/toy'

const Playroom = (props) => {
	const { msgAlert, user, toyCards } = props
	// console.log('props in home', props)

	return (
		<Container className='m-2' style={{ textAlign: 'center' }}>
			<h1 className="playroomName">{user.firstName}'s Playroom</h1>
            <br/>
            <h4>My Toy Rotations</h4>
			<RotationsIndex msgAlert={msgAlert} />
            <br/>
            <h4>My Toy Box</h4>
            {/* { toys.owner ?  */}
                    {/* // <p>{ toyCards }</p>
                    // <Card.Footer >owner: {toy.owner.firstName}</Card.Footer> */}
			     <ToysIndex msgAlert={msgAlert} />
            {/* // : null } */}
		</Container>
	)
}

export default Playroom