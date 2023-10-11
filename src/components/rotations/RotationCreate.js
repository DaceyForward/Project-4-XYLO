// RotationCreate is going to render a form
// this form will build a rotation object in state
// the form will submit an axios POST request when submitted
// we should send a success or failure message
// on success, redirect to the new rotation show page
// on failure, component should send the message and remain visible
import { useState } from 'react'
import { createRotation } from '../../api/rotation'
import { createRotationSuccess, createRotationFailure } from '../shared/AutoDismissAlert/messages'
import RotationForm from '../shared/RotationForm'

// to redirect to a different component(page) we can use a hook from react-router
import { useNavigate } from 'react-router-dom'

const RotationCreate = (props) => {
    // pull out our props for easy reference
    const { user, msgAlert } = props

    // to utilize the navigate hook from react-router-dom
    const navigate = useNavigate()

    const [rotation, setRotation] = useState({
        name: '',
        type: '',
        age: '',
        adoptable: false
    })

    const onChange = (e) => {
        // e is the placeholder for event
        e.persist()

        setRotation(prevRotation => {
            const updatedName = e.target.name
            let updatedValue = e.target.value

            // the above is enough for string inputs
            // but we have a number and a boolean to handle
            if (e.target.type === 'number') {
                // if the target type is a number - updateValue must be a number
                updatedValue = parseInt(e.target.value)
            }

            // to handle our checkbox, we need to tell it when to send a true, and when to send a false. we can target it by the unique name(adoptable) and handle it the way checkboxes are meant to be handled.
            // a checkbox only sends the value 'checked' not the boolean we need
            if (updatedName === 'adoptable' && e.target.checked) {
                updatedValue = true
            } else if (updatedName === 'adoptable' && !e.target.checked) {
                updatedValue = false
            }
            
            // build the rotation object, grab the attribute name from the field and assign it the respective value.
            const updatedRotation = { [updatedName] : updatedValue }

            // keep all the old rotation stuff and add the new rotation stuff(each keypress)
            return {
                ...prevRotation, ...updatedRotation
            }
        })
    }

    const onSubmit = (e) => {
        // we're still using a form - the default behavior of a form is to refresh the page
        e.preventDefault()

        // we're making an api call here
        // so we want to handle the promise with then and catch
        // first we want to send our create request
        createRotation(user, rotation)
            // then navigate the user to the show page if successful
            .then(res => { navigate(`/rotations/${res.data.rotation._id}`)})
            // send a success message
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: createRotationSuccess,
                    variant: 'success'
                })
            })
            // if it fails, keep the user on the create page and send a message
            .catch(() => {
                msgAlert({
                    heading: 'Oh no!',
                    message: createRotationFailure,
                    variant: 'danger'
                })
            })
    }

    return (
        <RotationForm 
            rotation={rotation} 
            handleChange={onChange}
            handleSubmit={onSubmit}
            heading="Add a new rotation!"
        />
    )
}

export default RotationCreate