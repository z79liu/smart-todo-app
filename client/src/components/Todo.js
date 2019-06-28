import React, { Component } from 'react'

class Todo extends Component {
  constructor(props){
    super(props);
    this.state={
      todo: "",
      list: []
    }
  }
  handleChange = (e)=>{
    this.setState({todo: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({list: [...this.state.list,this.state.todo]})
    this.setState({todo: ''})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>What do you want to accomplish?</label>
          <textarea onChange={this.handleChange} value={this.state.todo} name="todo"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Todo
