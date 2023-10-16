// this modal is rendered by RotationShow component
// the state that controls this modal, whether the modal is open or not will live in the RotationShow component
// the state AND the updaterfunction associated with that state is passed here as a prop

import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import RotationForm from '../shared/RotationForm'
import { updateRotationSuccess, updateRotationFailure} from '../shared/AutoDismissAlert/messages'
// import { updateRotation } from '../../api/rotation'

// this modal has its own props that it needs in order to open and close
// since we will be using the RotationForm as well, we'll need those props

const EditRotationModal = (props) => {
    const { user, show, handleClose, updateRotation, msgAlert, triggerRefresh } = props

    const [rotation, setRotation] = useState(props.rotation)

    // we'll use updateRotation in our onSubmit
    const onChange = (e) => {
        e.persist()

        setRotation(prevRotation => {
            const updatedName = e.target.name
            let updatedValue = e.target.value

            if (e.target.type === 'number') {
                updatedValue = parseInt(e.target.value)
            }

            const updatedRotation = { [updatedName] : updatedValue }

            return {
                ...prevRotation, ...updatedRotation
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        // make our api call -> updateRotation
        updateRotation(user, rotation)
            // close the modal
            .then(() => handleClose())
            // send a success message
            .then(() => {
                msgAlert({
                    heading: 'Rotation Updated!',
                    message: updateRotationSuccess,
                    variant: 'success'
                })
            })
            // trigger a refresh of the RotationShow component
            .then(() => triggerRefresh())
            // if anything goes wrong, send an error message
            .catch(() => {
                msgAlert({
                    heading: 'Oh no! There was a problem updating this rotation.',
                    message: updateRotationFailure,
                    variant: 'danger'
                })
            })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <RotationForm 
                    rotation={rotation}
                    handleChange={onChange}
                    handleSubmit={onSubmit}
                    heading="Update Rotation"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditRotationModal