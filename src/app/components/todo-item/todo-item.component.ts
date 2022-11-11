import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { TodoModel } from '../../state/todos.state';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo?: TodoModel;

  editTodo?: boolean = false;

  todoInput?: string = ''
  todoStatus?: boolean = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoInput = this.todo?.title;
    this.todoStatus = this.todo?.completed;
  }

  toggleEdit() {
    this.editTodo = !this.editTodo
  }

  updateTodo() {
    this.toggleEdit();
    let newTitle: string = this.todoInput || ''
    let newStatus: boolean = this.todoStatus || false
    this.todoService.updateTodo({ id: this.todo?.id, title: newTitle, completed: newStatus });
  }

  changeStatus() {
    this.todoStatus = !this.todoStatus
    this.updateTodo();
  }

  deleteTodo() {
    this.todo ? this.todoService.deleteTodoAction(this.todo) : ''
  }

}
