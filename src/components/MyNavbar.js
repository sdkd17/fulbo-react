// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Switch,
// } from 'react-router-dom';
import React, {Component} from 'react';
import { Navbar, NavItem } from 'react-materialize';


class MyNavbar extends Component {
	render () {
		return (
			<Navbar brand='Fulbo' right>
		        <NavItem href='#!'>Usuarios</NavItem>
		        <NavItem href='#!'>Partidos </NavItem>
		        
	      	</Navbar>
		);
	}
}

export default MyNavbar;