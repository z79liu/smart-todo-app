import React, { Component } from 'react'

export class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      name: ''
    }
  }
  render() {
    let button;
    if(this.state.isLoggedIn){
      button = <button>Logout</button>
    } else {
      button = <button>Login</button>
    }
    return (
      <div>
        {button}
      </div>
    )
  }
}

export default Navbar
