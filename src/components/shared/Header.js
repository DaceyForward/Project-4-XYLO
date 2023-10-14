import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
// import './index.css'

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
	background: 'rgb(135, 201, 236)',
	margin: '10px'
}
const authenticatedOptions = (
	<>
		<Nav.Item className='m-2'>
			<Link to='/toys' style={linkStyle}>
				Toy Box
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='/toys/mine' style={linkStyle}>
				Playroom
			</Link>
		</Nav.Item>
		{/* <Nav.Item className='m-2'>
			<Link to='create-toy' style={linkStyle}>
				Add Toy
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='create-rotation' style={linkStyle}>
				Add Rotation
			</Link>
		</Nav.Item> */}
		<Nav.Item className='m-2'>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item className='m-2'>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item className='m-2'>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Item className='m-2'>
			<Link to='/about' style={linkStyle}>
				About
			</Link>
		</Nav.Item>
	</>
)

const Header = ({ user }) => (
	<Navbar className='NavColor' variant='dark' expand='md'>
		<Navbar.Brand className='logoFont m-2'>
            <Link to='/' style={linkStyle}>
                XYLO
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.firstName}</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
