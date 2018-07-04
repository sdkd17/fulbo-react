import React, {Component} from 'react';
import { Button, Card, Row, Col, Container } from 'react-materialize';

class User extends Component {

	render(){
		return (
			<Container>
				<Button> {this.props.nick} </Button>
			</Container>
		);
	}
}

export default User;