import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}))
  }
  render() {
    return (
      <div className="App">
        <h1>users</h1>
        <ul>
          {this.state.users.map(user=> 
          <li key={user.id}>{user.username}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
