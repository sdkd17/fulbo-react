import React, { Component } from 'react';
import FindUser from './components/FindUser'
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
          <FindUser/>
        </Container>
      </div>
    );
  }
}

export default App;
