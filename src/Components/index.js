import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<Link to='/Cart'><div>Cart</div></Link>
		<Link to='/Gallery'><div>Gallery</div></Link>
		<Link to='/ProductDetail'><div>ProductDetail</div></Link>
		<Link to='/Shop'><div>Shop</div></Link>
		<Link to='/Home'><div>Home</div></Link>
		<Link to='/Typography'><div>Typography</div></Link>
		<Link to='/SystemColor'><div>SystemColor</div></Link>
		<Link to='/Component'><div>Component</div></Link>
	</div>
	)
}