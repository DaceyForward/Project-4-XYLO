// this modal is rendered by ToyShow component
// the state that controls this modal, whether the modal is open or not will live in the ToyShow component
// the state AND the updaterfunction associated with that state is passed here as a prop

import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ToyForm from '../shared/ToyForm'
import { updateToySuccess, updateToyFailure} from '../shared/AutoDismissAlert/messages'
import { updateToy } from '../../api/toy'

// import {
//     MDBBtn,
//     MDBModal,
//     MDBModalDialog,
//     MDBModalContent,
//     MDBModalHeader,
//     MDBModalTitle,
//     MDBModalBody,
//     MDBModalFooter,
//   } from 'mdb-react-ui-kit';

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

            // if (updatedName === 'adoptable' && e.target.checked) {
            //     updatedValue = true
            // } else if (updatedName === 'adoptable' && !e.target.checked) {
            //     updatedValue = false
            // }

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

    // const [basicModal, setBasicModal] = useState(false);

    // const toggleShow = () => setBasicModal(!basicModal);

    return (
        <Modal className='modalColor' show={show} onHide={handleClose} >
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

    //     <>
    //     <MDBBtn onClick={toggleShow}>LAUNCH DEMO MODAL</MDBBtn>
    //     <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
    //       <MDBModalDialog>
    //         <MDBModalContent>
    //           <MDBModalHeader>
    //             <MDBModalTitle>Modal title</MDBModalTitle>
    //             <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
    //           </MDBModalHeader>
    //           <MDBModalBody>...</MDBModalBody>
  
    //           <MDBModalFooter>
    //             <MDBBtn color='secondary' onClick={toggleShow}>
    //               Close
    //             </MDBBtn>
    //             <MDBBtn>Save changes</MDBBtn>
    //           </MDBModalFooter>
    //         </MDBModalContent>
    //       </MDBModalDialog>
    //     </MDBModal>
    //   </>
    )
}

export default EditToyModal