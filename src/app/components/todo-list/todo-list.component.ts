import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ThemeService } from 'src/app/services/theme.service';
import { TodoService } from 'src/app/services/todo.service';
import { todoSelector } from 'src/app/state/todo.reducers';
import { TodoModel } from '../../state/todos.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: TodoModel[] = []

  constructor(private store: Store, private todoService: TodoService, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.todoService.addStoredTodos();
    this.loadTodos();
  }

  loadTodos() {
    this.store.select(todoSelector).subscribe((todos: TodoModel[]) => {
      this.todos = todos;
      if (this.todos.length > 0) {
        this.todoService.setTodoToLocalstorage(this.todos)
      }
    })
  }

  changeTheme() {
    this.themeService.toggleTheme();
  }

} 
