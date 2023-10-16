import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import { indexToys } from '../../api/toy'
import messages from '../shared/AutoDismissAlert/messages'
import SearchBar from '../SearchBar'
import { Container } from 'react-bootstrap'

const cardContainerLayout = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const ToysIndex = (props) => {
    const [toys, setToys] = useState(null)
    const [error, setError] = useState(false)
    const [searchInput, setSearchInput] = useState('');
    const [displayToys, setDisplayToys] = useState(toys)
    const { msgAlert } = props

    // useEffect takes two arguments
    // first a callback function
    // second a 'dependency array'
    useEffect(() => {
        indexToys()
            .then(res => {
                // console.log('the toys?', res.data.toys)
                setToys(res.data.toys)
                // setDisplayToys(res.data.toys)
            })
            // .then(() => {
            //     setDisplayToys(toys)
            // })
            .catch(err => {
                msgAlert({
                    heading: 'Error getting Toys',
                    message: messages.indexToysFailure,
                    variant: 'danger'
                })
                setError(true)
            })
    }, [])

    useEffect(() => {
        if (toys && searchInput) {
            console.log('filtered toys', toys.filter((toy) => toy.name.toLowerCase().includes(searchInput.toLowerCase())))
            return setDisplayToys(displayToys.filter((toy) => toy.name.toLowerCase().includes(searchInput.toLowerCase())))
        }
        else if (searchInput === '') {
            return setDisplayToys(toys);
        }
    }, [searchInput, toys])

    console.log('the toys in ToyIndex', toys)
    console.log('the displayToys', displayToys)
    // we need to account for multiple potential states of our data
    // if we have an error
    if (error) {
        return <LoadingScreen />
    }

    // if the toys aren't even loaded yet
    if (!displayToys) {
        return <LoadingScreen />
    // if we have NO toys
    } else if (displayToys.length === 0) {
        return <p>Add Some Toys!</p>
    }

    const toyCards = displayToys.map(toy => (
    <>
        <Card className='toyCards shadow p-3 mb-5 bg-body-tertiary rounded"' key={ toy._id } style={{ width: '30%', margin: 5 }}>
            <Card.Header className='toyCardHeader'>{ toy.name }</Card.Header>
            <Card.Body className='toyCards'>
                <Card.Text className='toyCards'>
                    <Link to={`/toys/${toy._id}`} className='toyButton btn btn-info'>
                        Details
                    </Link>
                </Card.Text>
            </Card.Body>
        </Card>
    </>
    ))

    return (
        <Container className='m-2' style={{ textAlign: 'center' }}>
            <div classname='search'>
            <br />
                <SearchBar 
                    searchInput={searchInput} 
                    setSearchInput={setSearchInput} 
                    displayToys={displayToys}
                    setDisplayToys={setDisplayToys}
                    />
            </div>
            <br />
            <div className="container-md" style={ cardContainerLayout }>
                { toyCards }
            </div>
        </Container>
    )
}

export default ToysIndex