/* 

*/
import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();
// console.log(todoList.todos);

// FIXME REPASAR CALLBACK
todoList.todos.forEach((todo) => crearTodoHtml(todo));

/* const tarea = new Todo('Aprender Javascript');
todoList.nuevoTodo(tarea); */

/* todoList.todos[0].imprimirClase();
console.log('todos:', todoList.todos); */

/* localStorage.setItem('Local', 'ABC12345');
sessionStorage.setItem('Sesion', 'ABC12345');

setTimeout(() => {
  localStorage.removeItem('mi-key');
}, 20000); */
