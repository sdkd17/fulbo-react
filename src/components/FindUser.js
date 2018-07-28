import React, {Component} from 'react';
import User from './User'
import { Row } from 'react-materialize';

class FindUser extends Component {

	constructor(props){
		super(props);
		this.state = {user: []}
	}

	componentDidMount() {
		fetch("/users/1").then(res => res.json()).then(
			(user) => {this.setState({ user });
    });
		// fetch("/users").then(res => console.log(res));
		
	}

	render(){

		return(
			<User user={this.state.user}/>
		)
	}
}

export default FindUser;