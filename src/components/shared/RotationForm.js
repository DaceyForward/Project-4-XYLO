// this form will take several props, and be used by both Create and Update
// the action will be dependent upon the parent component(create or update)
// however, the form will look the same on both pages.
import { Form, Button, Container } from 'react-bootstrap'

const RotationForm = (props) => {
    // we need several props for a working, reusable form
    // we need the object itself(rotation), a handleChange, a handleSubmit
    // sometimes it's nice to have a custom heading (to diff b/w our components)
    const { rotation, handleChange, handleSubmit, heading } = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="m-2">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control 
                        placeholder="name of your rotation"
                        id="name"
                        name="name"
                        value={ rotation.name }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control 
                        placeholder="brief description of your rotation"
                        id="desc"
                        name="desc"
                        value={ rotation.desc }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label>Theme:</Form.Label>
                    <Form.Control 
                        placeholder="theme of your rotation"
                        id="theme"
                        name="theme"
                        value={ rotation.theme }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label>Toys:</Form.Label>
                    <Form.Control 
                        placeholder="toys included in your rotation"
                        id="toys"
                        name="toys"
                        value={ rotation.toys }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label>Start Date:</Form.Label>
                    <Form.Control 
                        type="date"
                        placeholder="start date of your rotation"
                        id="start"
                        name="start"
                        value={ rotation.start }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label>End Date:</Form.Label>
                    <Form.Control 
                        type="date"
                        placeholder="end date of your rotation"
                        id="end"
                        name="end"
                        value={ rotation.end }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button className="m-2" type="submit">Submit</Button>
            </Form>
        </Container>
    )

}

export default RotationForm