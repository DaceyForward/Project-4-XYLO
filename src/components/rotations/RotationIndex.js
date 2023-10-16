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
        <Card className='rotationCards shadow p-3 mb-5 bg-body-tertiary rounded"' key={ rotation._id } style={{ width: '30%', margin: 5 }}>
            <Card.Header className='rotationCardsHeader'>{ rotation.name }</Card.Header>
            <Card.Body className='rotationCards'>
                <Card.Text className='rotationCards'>
                    <Link to={`/rotations/${rotation._id}`} className='rotButton btn btn-info'>
                        Details
                    </Link>
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        <div className="container-md" style={ cardContainerLayout }>
            { rotationCards }
        </div>
    )
}

export default RotationsIndex