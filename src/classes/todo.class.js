/* 

*/
/* prettier-ignore */
export class Todo {

  static fromJson ({tarea, id, completado, creado}){
      const tempTodo = new Todo(tarea);

      tempTodo.id=id;
      tempTodo.completado=completado;
      tempTodo.creado=creado;
      

      return tempTodo;
  };


  constructor (tarea) {

    this.tarea       = tarea;
    this.id          = new Date().getTime(); //en este caso para manejarlo como un id
    this.completado  = false;
    this.creado      = new Date();

  }

  imprimirClase(){
    console.log(`${this.tarea} - ${this.id}`);
    
  };

}
