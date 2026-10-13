import './App.css';
import { Component } from 'react';
import TodoList from './components/TodoList';

// Ключ, під яким todo зберігаються в localStorage
const STORAGE_KEY = 'todos';

// Читаємо збережені todo з localStorage (якщо там порожньо — повертаємо [])
function loadTodos() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
}

// Записуємо масив todo в localStorage
function saveTodos(todos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    // localStorage може бути недоступним — тоді просто не зберігаємо
  }
}

// Класовий компонент: весь ToDo List
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todos: loadTodos(), // при першому рендері беремо дані з localStorage
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  // Додавання по натисканню клавіші Enter
  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.addTodo();
    }
  };

  addTodo = () => {
    const name = this.state.inputValue.trim();
    if (name === '') return; // порожні задачі не додаємо

    // Новий todo має структуру { id, name }
    const newTodo = { id: Date.now(), name: name };
    const todos = [...this.state.todos, newTodo];

    this.setState({ todos: todos, inputValue: '' });
    saveTodos(todos); // зберігаємо в localStorage
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);

    this.setState({ todos: todos });
    saveTodos(todos); // оновлюємо localStorage
  };

  // Очищення: видаляємо дані з localStorage та порожнимо список на екрані
  clearTodoList = () => {
    localStorage.removeItem(STORAGE_KEY);
    this.setState({ todos: [] });
  };

  render() {
    const { inputValue, todos } = this.state;

    return (
      <div className="App">
        <input
          type="text"
          placeholder="new task"
          value={inputValue}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />

        <p className="count">{todos.length}</p>

        <TodoList todos={todos} onDelete={this.deleteTodo} />

        <div className="buttons">
          <button onClick={this.addTodo}>Add TO DO</button>
          <button className="clear-btn" onClick={this.clearTodoList}>
            Clear Todo List
          </button>
        </div>
      </div>
    );
  }
}

export default App;
