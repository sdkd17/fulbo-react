import React, { Component } from 'react';
import User from './components/User'
import Users from './components/Users'
import MyNavbar from './components/MyNavbar'
import logo from './logo.svg';
import { Button, Card, Row, Col, Container } from 'react-materialize';

// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MyNavbar/>
        
        <Container>
          <Users/>
        </Container>
      </div>
    );
  }
}

export default App;
