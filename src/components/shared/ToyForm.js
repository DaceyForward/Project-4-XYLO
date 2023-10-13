// this form will take several props, and be used by both Create and Update
// the action will be dependent upon the parent component(create or update)
// however, the form will look the same on both pages.
import { Form, Button, Container } from 'react-bootstrap'

import React, { useState } from "react";

// import Upload from '../Upload'

const ToyForm = (props) => {
    // we need several props for a working, reusable form
    // we need the object itself(toy), a handleChange, a handleSubmit
    // sometimes it's nice to have a custom heading (to diff b/w our components)
    const { toy, handleChange, handleSubmit, heading } = props

    // const [file, setFile] = useState();
    // function handleChanges(e) {
    //     console.log(e.target.files);
    //     setFile(URL.createObjectURL(e.target.files[0]));
    // }

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="m-2">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control 
                        placeholder="name of the toy"
                        id="name"
                        name="name"
                        value={ toy.name }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label>Level:</Form.Label>
                    <Form.Control 
                        placeholder="age level of the toy"
                        id="level"
                        name="level"
                        value={ toy.level }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label>Focus Area:</Form.Label>
                    <Form.Control 
                        placeholder="subject focus area of the toy"
                        id="focusArea"
                        name="focusArea"
                        value={ toy.focusArea }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label>Type:</Form.Label>
                    <Form.Control 
                        placeholder="material of the toy"
                        id="type"
                        name="type"
                        value={ toy.type }
                        onChange={handleChange}
                    />
                </Form.Group>
                {/* <Upload /> */}
                {/* <div className="App">
                    <h2>Add Image:</h2>
                    <input type="file" onChange={handleChanges} />
                    <img src={file} />
                </div> */}
                {/* <Form.Group>
                    <Form.File label="Select an image for your toy" />
                </Form.Group> */}
                <br />
                <Button className="addButton m-2" type="submit">Add Toy</Button>
            </Form>
        </Container>
    )

}

export default ToyForm