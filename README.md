# React-HW4 — ToDo List (класи + localStorage)

## Запуск

Windows PowerShell:

```powershell
npm.cmd install
npm.cmd start
```

(або `npm install` та `npm start`, якщо PowerShell дозволяє запуск скриптів)

Відкриється http://localhost:3000

## Що реалізовано

1. ToDo List переписано на класові компоненти:
   - `App` (`src/App.js`) — стан `{ inputValue, todos }`, методи `addTodo`, `deleteTodo`, `clearTodoList`;
   - `TodoList` (`src/components/TodoList.js`) — дочірній компонент для відмальовування списку.
2. Дані зберігаються в `localStorage` під ключем `todos`:
   - читаються в `constructor` при завантаженні сторінки;
   - записуються при додаванні та видаленні todo.
   Після перезавантаження сторінки (F5) список залишається.
3. Кнопка **Clear Todo List** видаляє ключ `todos` з `localStorage` і очищає список на екрані.

Збережене можна побачити в браузері: F12 → Application → Local Storage → `http://localhost:3000`.

## Структура

```
React-HW4/
├── public/index.html
├── src/
│   ├── components/TodoList.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```
