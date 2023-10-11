// this form will take several props, and be used by both Create and Update
// the action will be dependent upon the parent component(create or update)
// however, the form will look the same on both pages.
import { Form, Button, Container } from 'react-bootstrap'

const ToyForm = (props) => {
    // we need several props for a working, reusable form
    // we need the object itself(toy), a handleChange, a handleSubmit
    // sometimes it's nice to have a custom heading (to diff b/w our components)
    const { toy, handleChange, handleSubmit, heading } = props

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
                <Button className="m-2" type="submit">Submit</Button>
            </Form>
        </Container>
    )

}

export default ToyForm