// import { useState, useEffect } from 'react'
// import { Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import LoadingScreen from '../shared/LoadingScreen'

// // api function call from our api file
// import { detailMineToy } from '../../api/toy'

// // we need our messages from the autodismiss alert messaged file
// import messages from '../shared/AutoDismissAlert/messages'

// const cardContainerLayout = {
//     display: 'flex',
//     flexFlow: 'row wrap',
//     justifyContent: 'center'
// }

// const MineIndex = (props) => {
//     const [toys, setToys] = useState(null)
//     const [error, setError] = useState(false)
//     const [myToys, setMyToys] = useState(null)

//     const { msgAlert } = props

//     // useEffect takes two arguments
//     // first a callback function
//     // second a 'dependency array'
//     useEffect(() => {
//         detailMineToy()
//             .then(res => {
//                 // console.log('the toys?', res.data.toys)
//                 setToys(res.data.toys)
//                 setMyToys(res.data.myToys)
//             })
//             .catch(err => {
//                 msgAlert({
//                     heading: 'Error getting your toys.',
//                     message: messages.indexToysFailure,
//                     variant: 'danger'
//                 })
//                 setError(true)
//             })
//     }, [])

//     // useEffect(() => {
//     //     if (myToys) {
//     //         console.log('these are my toys', myToys)
//     //         return
//     //     }

//     // }, [])

//     // we need to account for multiple potential states of our data
//     // if we have an error
//     if (error) {
//         return <LoadingScreen />
//     }

//     // if the toys aren't even loaded yet
//     // if (!myToys) {
//     //     return <LoadingScreen />
//     // if we have NO toys
//     // } else if (myToys.length === 0) {
//     //     return <p>There are no toys in your playroom. Add some!</p>
//     // }
//     console.log('the toys in MineIndex', myToys)

//     const toyCards = toys.map(toy => (
//         <Card key={ toy._id } style={{ width: '30%', margin: 5 }}>
//             <Card.Header>{ toy.name }</Card.Header>
//             <Card.Body>
//                 <Card.Text>
//                     <Link to={`/toys/${toy._id}`} className='btn btn-info'>
//                         View { toy.name }
//                     </Link>
//                 </Card.Text>
//                 { toy.owner ? 
//                     <Card.Footer>owner: {toy.owner.email}</Card.Footer>
//                 : null }
//             </Card.Body>
//         </Card>
//     ))

//     return (
//         <div className="container-md" style={ cardContainerLayout }>
//             { toyCards }
//         </div>
//     )
// }

// // export our component
// export default MineIndex