import React, { Component } from 'react';
import './todo-list.css';
import Todo from './Todo'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {todo: []}
  }

  taskCompleter = (todoId) => {
    const nextTodoState = this.state.todo.map(task => {
      if(task.id !== todoId) return task
      return {...task, complete: true }
    })
    this.setState(prevState => ({todo: nextTodoState}))
  }

  addTodo = () => {
    this.setState({
      todo: [...this.state.todo, {id: this.state.todo.length, complete:false}],
    })
  }

  render(){
    return(
      <div>
        <div className='header'>
          <button onClick={this.addTodo}>Add Todo </button>
        </div>
        <div className='column'>
          <div className='todolist'>
            {this.state.todo.filter(task => !task.complete).map(task =>
              <Todo id={task.id} completeTask={this.taskCompleter} complete={task.complete}/>
            )
            }
          </div>
        </div>
        <div className='column'>
          <div className='todolist'>
            {this.state.todo.filter(task => task.complete).map(task =>
              <Todo id={task.id} completeTask={this.taskCompleter} complete={task.complete}/>
            )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default TodoList
