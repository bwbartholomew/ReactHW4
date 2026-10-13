import { Component } from 'react';

// Дочірній класовий компонент: відмальовує масив todo з props
class TodoList extends Component {
  render() {
    const { todos, onDelete } = this.props;

    return (
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.name}</span>
            <button className="delete-btn" onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
