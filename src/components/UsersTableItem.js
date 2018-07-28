import React, {Component} from 'react';
// import { CollectionItem } from 'react-materialize';

class UsersTableItem extends Component {

	render(){
		return (
			<tr>
				<td> {this.props.user.id} </td>  
				<td> {this.props.user.nick} </td>  
				<td> {this.props.user.email} </td>  
				<td> {this.props.user.nombre} </td>  
				<td> {this.props.user.apellido} </td>  
				<td> {this.props.user.nacimiento} </td>  
				<td> {this.props.user.descripcion} </td>  
			</tr>
				 
			
		);
	}
}

export default UsersTableItem;