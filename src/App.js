import React, {Component} from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          title: 'Todo1', id: 0
        },
        {
          title: 'Todo2', id: 1
        }
      ],
      uniqueId: 1,
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(title) {
    const {
      tasks,
      uniqueId,
    } = this.state;

    tasks.push({
      title,
      id: uniqueId
    });

    this.setState({
      tasks,
      uniqueId: uniqueId + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;