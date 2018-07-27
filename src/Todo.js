import React, { Component } from 'react';
import './todo-list.css';

class Todo extends Component {

  completeTodo = () => {
    const id = this.props.id
    this.props.completeTask(id)
  }

  render() {
    return (
      <div className={this.props.complete ? 'todone' : 'todo'}>
        <h1>Title of todo</h1>
        <p>some description of what todo</p>
        <button onClick={this.completeTodo}>DONE</button>
      </div>
    );
  }
}

export default Todo;
