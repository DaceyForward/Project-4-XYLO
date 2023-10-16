// this modal is rendered by ToyShow component
// the state that controls this modal, whether the modal is open or not will live in the ToyShow component
// the state AND the updaterfunction associated with that state is passed here as a prop

import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ToyForm from '../shared/ToyForm'
import { updateToySuccess, updateToyFailure} from '../shared/AutoDismissAlert/messages'
// import { updateToy } from '../../api/toy'

// this modal has its own props that it needs in order to open and close
// since we will be using the ToyForm as well, we'll need those props

const EditToyModal = (props) => {
    const { user, show, handleClose, updateToy, msgAlert, triggerRefresh } = props

    const [toy, setToy] = useState(props.toy)

    // we'll use updateToy in our onSubmit
    const onChange = (e) => {
        e.persist()

        setToy(prevToy => {
            const updatedName = e.target.name
            let updatedValue = e.target.value

            if (e.target.type === 'number') {
                updatedValue = parseInt(e.target.value)
            }

            const updatedToy = { [updatedName] : updatedValue }

            return {
                ...prevToy, ...updatedToy
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        // make our api call -> updateToy
        updateToy(user, toy)
            // close the modal
            .then(() => handleClose())
            // send a success message
            .then(() => {
                msgAlert({
                    heading: 'Toy Updated!',
                    message: updateToySuccess,
                    variant: 'success'
                })
            })
            // trigger a refresh of the ToyShow component
            .then(() => triggerRefresh())
            // if anything goes wrong, send an error message
            .catch(() => {
                msgAlert({
                    heading: 'Oh no! There was a problem updating this toy.',
                    message: updateToyFailure,
                    variant: 'danger'
                })
            })
    }

    return (
        <Modal show={show} onHide={handleClose} >
            <Modal.Header className='modalColor' closeButton />
            <Modal.Body className='modalColor'>
                <ToyForm 
                    toy={toy}
                    handleChange={onChange}
                    handleSubmit={onSubmit}
                    heading="Update Toy"
                    className='modalColor'
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditToyModal