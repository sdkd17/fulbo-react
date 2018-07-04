import React, {Component} from 'react';
import User from './User';

class Users extends Component {

	constructor(props){
		super(props);
		this.state = {users: []}
	}

	componentDidMount() {
		fetch("/users").then(res => res.json()).then(
			(users) => {this.setState({ users });
      	});
		// fetch("/users").then(res => console.log(res));
	}

	render(){
		return (
			<div>
			{this.state.users.map((user) => {
				return <User nick={user.nick}/>
			})}
			</div>
		);
	}
}

export default Users;