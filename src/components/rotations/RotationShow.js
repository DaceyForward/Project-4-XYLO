import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import EditRotationModal from './EditRotationModal'
// import NewRotationModal from '../rotations/NewRotationModal'
// import ToyShow from '../toys/ToyShow'
import { useNavigate } from 'react-router-dom'

import { Container, Card, Button } from 'react-bootstrap'

// we'll need to import an api function to grab an individual rotation
import { detailRotation, updateRotation, deleteRotation } from '../../api/rotation'

import { detailRotationFailure, deleteRotationSuccess, deleteRotationFailure } from '../shared/AutoDismissAlert/messages'

// we're going to use route parameters to get the id of the rotation we're trying to retrieve from the server.
// then we use that id with our api call function
// when we finally retrieve the rotation, render the details on the screen

const rotationCardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const RotationShow = (props) => {
    const [rotation, setRotation] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    // const [rotationModalShow, setRotationModalShow] = useState(false)
    // this is a boolean that we can alter to trigger a page re-render
    const [updated, setUpdated] = useState(false)

    const navigate = useNavigate()

    // we need to pull the id from the url
    // localhost:3000/rotations/<rotation_id>
    // to retrieve our id, we can use something from react-router-dom called useParams
    // this is called id, because that's how it is declared in our Route component in App.js
    const { id } = useParams()
    const { user, msgAlert } = props

    // useEffect takes two arguments
    // the callback function
    // the dependency array
    // the dependency array determines when useEffect gets called
    // if any piece of state inside the dependency array changes
    // this triggers the useEffect to run the callback function again
    // NEVER EVER EVER EVER EVER EVER EVER put a piece of state in the dependency array that gets updated by the useEffect callback function
    // doing this causes an infinite loop
    // react will kill your application if this happens
    useEffect(() => {
        detailRotation(id)
            .then(res => setRotation(res.data.rotation))
            .catch(err => {
                msgAlert({
                    heading: 'Error getting rotation',
                    message: detailRotationFailure,
                    variant: 'danger'
                })
            })
    }, [id, msgAlert, updated])

    const rotationRemoval = () => {
        // we want to remove the rotation
        deleteRotation(user, rotation._id)
            // send a success message
            .then(() =>
                msgAlert({
                    heading: `${rotation.name} has been deleted`,
                    message: deleteRotationSuccess,
                    variant: 'success',
                })
            )
            // navigate the user to the home page(index)
            .then(() => navigate('/'))
            // send a fail message if there is an error
            .catch(() =>
                msgAlert({
                    heading: 'Oh no!',
                    message: deleteRotationFailure,
                    variant: 'danger',
                })
            )
    }

    let rotationCards
    if (rotation) {
        if (rotation.length > 0) {
            rotationCards = rotation.map(rotation => (
                <RotationShow 
                    key={rotation._id}
                    rotation={rotation}
                    msgAlert={msgAlert}
                    triggerRefresh={() => setUpdated(prev => !prev)}
                    user={user}
                />
            ))
        } else {
            rotationCards = <p>No toys added to your rotation yet.</p>
        }
    }

    if(!rotation) {
        return <LoadingScreen />
    }

    return (
        <>
            <Container className='m-2'>
                <Card>
                    <Card.Header>{ rotation.name }</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <small>Name: {rotation.name}</small><br/>
                            <small>Description: {rotation.desc}</small><br/>
                            <small>Theme: {rotation.theme}</small><br/>
                            <small>Toys: {rotation.toys}</small><br/>
                            <small>Start Date: {new Date(rotation.start).toLocaleDateString()}</small><br/>
                            <small>End Date: {new Date(rotation.end).toLocaleDateString()}</small><br/>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                            <>
                                <Button 
                                    className="m-2" variant="warning"
                                    onClick={() => setEditModalShow(true)}
                                >
                                    Edit
                                </Button>
                                <Button 
                                    className="m-2" variant="danger"
                                    onClick={() => rotationRemoval()}
                                >
                                    Delete
                                </Button>
                            </>
                    </Card.Footer>
                </Card>
            </Container>
            <Container className='m-2' style={rotationCardContainerLayout}>
                {rotationCards}
            </Container>
            <EditRotationModal 
                user={user}
                show={editModalShow}
                updateRotation={updateRotation}
                msgAlert={msgAlert}
                handleClose={() => setEditModalShow(false)}
                triggerRefresh={() => setUpdated(prev => !prev)}
                rotation={rotation}
            />
        </>
    )
}

export default RotationShow