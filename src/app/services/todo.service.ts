import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addStoredTodosAction, addTodoAction, deleteTodoAction, updateTodoAction } from '../state/todos.action';
import { TodoModel } from '../state/todos.state';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private store: Store) { }


  addStoredTodos() {
    console.log('store todos on reload :: ', this.getTodosFromLocalstorage())
    this.store.dispatch(addStoredTodosAction({todos : this.getTodosFromLocalstorage()}));
  }

  addTodo(todo: TodoModel) {
    this.store.dispatch(addTodoAction(todo));
  }

  updateTodo(todo: TodoModel) {
    this.store.dispatch(updateTodoAction(todo));
  }

  deleteTodoAction(todo: TodoModel){
    this.store.dispatch(deleteTodoAction(todo))
  }

  private getTodosFromLocalstorage() {
    const todosString = localStorage.getItem('todos');
    if (todosString) {
      return JSON.parse(todosString)
    }
    return [];
  }

  setTodoToLocalstorage(todos:TodoModel[]){
    localStorage.setItem('todos', JSON.stringify(todos))
  }

}
