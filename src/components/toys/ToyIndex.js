import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import { indexToys } from '../../api/toy'
import messages from '../shared/AutoDismissAlert/messages'

const cardContainerLayout = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const ToysIndex = (props) => {
    const [toys, setToys] = useState(null)
    const [error, setError] = useState(false)

    const { msgAlert } = props

    // useEffect takes two arguments
    // first a callback function
    // second a 'dependency array'
    useEffect(() => {
        indexToys()
            .then(res => {
                // console.log('the toys?', res.data.toys)
                setToys(res.data.toys)
            })
            .catch(err => {
                msgAlert({
                    heading: 'Error getting Toys',
                    message: messages.indexToysFailure,
                    variant: 'danger'
                })
                setError(true)
            })
    }, [])

    // we need to account for multiple potential states of our data
    // if we have an error
    if (error) {
        return <LoadingScreen />
    }

    // if the toys aren't even loaded yet
    if (!toys) {
        return <LoadingScreen />
    // if we have NO toys
    } else if (toys.length === 0) {
        return <p>Add Some Toys!</p>
    }
    console.log('the toys in ToyIndex', toys)

    const toyCards = toys.map(toy => (
        <Card key={ toy.id } style={{ width: '30%', margin: 5 }}>
            <Card.Header>{ toy.fullTitle }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={`/toys/${toy.id}`} className='btn btn-info'>
                        View { toy.name }
                    </Link>
                </Card.Text>
                { toy.owner ? 
                    <Card.Footer>owner: {toy.owner.email}</Card.Footer>
                : null }
            </Card.Body>
        </Card>
    ))

    return (
        <div className="container-md" style={ cardContainerLayout }>
            { toyCards }
        </div>
    )
}

// export our component
export default ToysIndex