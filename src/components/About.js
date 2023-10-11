import { Container, Card } from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack';
// import Image from 'react-bootstrap/Image';

const About = () => {
	// const { msgAlert, user } = props
	// console.log('props in home', props)

	return (
		<Container className='m-2' style={{ textAlign: 'center' }}>
			<h1>About Xylo</h1>
            <h2>The Digital Toy Box</h2>
			<p>Xylo is an online playroom toy rotation creation app! It is your digital toy box inventory, where you can create the perfect toy rotation for your kiddos. If your current playroom is just a dumping ground for all things CHILD, much like my own, then Xylo can help you get organized and keep your little ones engaged. In your Xylo playroom, you can build an inventory to create your digital toy box, then customize each rotation in any way you like!</p>
            <Stack gap={2} >
				<Card style={{ width: '50rem' }}>
					<Card.Img variant="top" src="./images/mess.png" />
					<Card.Body>
						<Card.Text>
							Does your playroom look something like this? When there are too many toy choices, children tend to bounce around and are not able to stay focused on one toy or task for very long.
						</Card.Text>
					</Card.Body>
				</Card>
				<br />
				<Card style={{ width: '50rem' }}>
					<Card.Img variant="top" src="./images/org.png" />
					<Card.Body>
						<Card.Text>
							As Lovevery points out, "a study compared how children played when offered 4 vs. 16 toys in a room. Toddlers who were offered 4 toys engaged more meaningfully with each, playing in a deeper way and spending more time exploring than toddlers who had 16 available toys." With Xylo toy rotations, you can create themes or focus areas based on your child's age, interests, ability, and more.
						</Card.Text>
					</Card.Body>
				</Card>
			</Stack>
		</Container>
	)
}

export default About