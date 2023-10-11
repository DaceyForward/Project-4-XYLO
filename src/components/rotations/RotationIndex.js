import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import { indexRotations } from '../../api/rotation'
import messages from '../shared/AutoDismissAlert/messages'

const cardContainerLayout = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const RotationsIndex = (props) => {
    const [rotations, setRotations] = useState(null)
    const [error, setError] = useState(false)

    const { msgAlert } = props

    // useEffect takes two arguments
    // first a callback function
    // second a 'dependency array'
    useEffect(() => {
        indexRotations()
            .then(res => {
                // console.log('the rotations?', res.data.rotations)
                setRotations(res.data.rotations)
            })
            .catch(err => {
                msgAlert({
                    heading: 'Error getting Rotations',
                    message: messages.indexRotationsFailure,
                    variant: 'danger'
                })
                setError(true)
            })
    }, [msgAlert])

    // we need to account for multiple potential states of our data
    // if we have an error
    if (error) {
        return <LoadingScreen />
    }

    // if the rotations aren't even loaded yet
    if (!rotations) {
        return <LoadingScreen />
    // if we have NO rotations
    } else if (rotations.length === 0) {
        return <p>Add a new playroom toy rotation!</p>
    }
    console.log('the rotations in RotationIndex', rotations)

    const rotationCards = rotations.map(rotation => (
        <Card key={ rotation._id } style={{ width: '30%', margin: 5 }}>
            <Card.Header key={ rotation.name }>{ rotation.name }</Card.Header>
            <Card.Body key={ rotation._id }>
                <Card.Text key={ rotation._id }>
                    <Link to={`/rotations/${rotation._id}`} className='btn btn-info'>
                        View { rotation.name }
                    </Link>
                </Card.Text>
                { rotation.owner ? 
                    <Card.Footer key={ rotation._id }>owner: {rotation.owner.firstName}</Card.Footer>
                : null }
            </Card.Body>
        </Card>
    ))

    return (
        <div className="container-md" style={ cardContainerLayout }>
            { rotationCards }
        </div>
    )
}

// export our component
export default RotationsIndex