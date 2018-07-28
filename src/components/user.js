import React, {Component} from 'react';
import { Row, Col, Collection, CollectionItem, Card, CardTitle } from 'react-materialize';

class User extends Component {

	render(){

		return(
			<Row>
				<Col s={6}>
				 	<Card className='small'
  					header={<CardTitle image=''>{this.props.user.nick}</CardTitle>}
  						actions={[<a href='#'>This is a Link</a>]}>
  					{this.props.user.descripcion}
					</Card>
				</Col>

				<Col s={6}>
					<Collection header="Datos de Usuario">
						
						<CollectionItem> Email: {this.props.user.email} </CollectionItem>
						<CollectionItem> Nombre: {this.props.user.nombre} </CollectionItem>
						<CollectionItem> Apellido: {this.props.user.apellido} </CollectionItem>
						<CollectionItem> Nacimiento: {this.props.user.nacimiento} </CollectionItem>
						
					</Collection>
				</Col>
			</Row>
		)
	}
}

export default User;