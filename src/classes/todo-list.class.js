/* 

*/

import { Todo } from './todo.class';

export class TodoList {
  constructor() {
    // this.todos = [];
    this.cargarLocalStorage();
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
    this.guardaLocalStorage();
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.guardaLocalStorage();
  }

  marcarCompletado(id) {
    for (const todo of this.todos) {
      //console.log(id, todo.id);

      if (todo.id == id) {
        todo.completado = !todo.completado;
        this.guardaLocalStorage();
        break;
      }
    }
  }

  eliminarCompletados() {
    this.todos = this.todos.filter((todo) => !todo.completado);
    this.guardaLocalStorage();
  }

  guardaLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }
  cargarLocalStorage() {
    this.todos = localStorage.getItem('todo')
      ? JSON.parse(localStorage.getItem('todo'))
      : [];
    this.todos = this.todos.map((obj) => Todo.fromJson(obj));
    /* if (localStorage.getItem('todo')) {
      this.todos = JSON.parse(localStorage.getItem('todo'));
      console.log(`Cargar Local:`, this.todos);
      console.log(typeof this.todos);
    } else {
      this.todos = [];
    } */
  }
}
