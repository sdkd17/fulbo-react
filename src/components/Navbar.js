import React, {Component} from 'react';
import { Navbar, Badge, NavItem } from 'react-materialize';

class Navbar extends Component {
	render () {
		return (
			<Navbar brand='logo' right>
		        <NavItem href='#!'>sass</NavItem>
		        <NavItem href='#!'>
		          sass <Badge newIcon>4</Badge>
		        </NavItem>
		        <NavItem href='#!'>sass</NavItem>
	      </Navbar>
		);
	}
}

export default Navbar;