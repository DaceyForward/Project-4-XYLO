import RotationsIndex from "./rotations/RotationIndex"
import ToysIndex from "./toys/ToyIndex"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { detailMineToy } from '../api/toy'
import PlayroomToys from "./toys/PlayroomToys"


const Playroom = (props) => {
	const { msgAlert, user, toyCards } = props
	const [toy, setToy] = useState(null)
	// console.log('props in home', props)
	// const { id } = useParams()

	return (
		<Container className='m-2' style={{ textAlign: 'center' }}>
			<h1 className="playroomName">{user.firstName}'s Playroom</h1>
            {/* <br/> */}
            <h4>My Toy Rotations</h4>
			<RotationsIndex msgAlert={msgAlert} />
			<Link to='/create-rotation' className='newToy btn btn-info'>
				Add A New Rotation
			</Link>
			<br/>
            <br/>
			<hr />
			{/* <br /> */}
            <h4>My Toy Box</h4>
            {/* { toys.owner ?  */}
                    {/* // <p>{ toyCards }</p>
                    // <Card.Footer >owner: {toy.owner.firstName}</Card.Footer> */}
			     {/* <ToysIndex msgAlert={msgAlert} /> */}
            {/* // : null } */}
			{/* <div>
			{
				toy.owner && user && toy.owner._id === user._id
				?
				<>
					<ToysIndex msgAlert={msgAlert} detailMineToy={detailMineToy} /> 
				</>
				:
				null
			}
			</div> */}
			{/* <br /> */}
			<Link to='/create-toy' className='newToy btn btn-info'>
				Add A New Toy
			</Link>
			
			{/* <ToyMine toy={toy} setToy={setToy}/> */}
			<PlayroomToys />
		</Container>
	)
}

export default Playroom