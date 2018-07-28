import { Table } from 'react-materialize';
import UsersTableItem from './UsersTableItem';
import React, {Component} from 'react';

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
			
			<Table header="Usuarios">
				<thead>
					<tr>
						<th data-field="id"> ID </th>
						<th data-field="nickname"> Nickname </th>
						<th data-field="email"> Email </th>
						<th data-field="nombre"> Nombre </th>
						<th data-field="apellido"> Apellido </th>
						<th data-field="nacimiento"> Nacimiento </th>
						<th data-field="descripcion"> Descripcion </th>
					</tr>
				</thead>

				<tbody>
					{this.state.users.map((user) => {
		 				return <UsersTableItem user={user}/>
		 			})}
				</tbody>
				
			</Table>
			
		);
	}
}

export default Users;