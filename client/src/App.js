import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Todo from './components/Todo';


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
        
        <h1>Smart to do app</h1>
        <Navbar/>
        <Todo/>
        <ul>
          {this.state.users.map(user=> 
          <li key={user.id}>{user.username}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
