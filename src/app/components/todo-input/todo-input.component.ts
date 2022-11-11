import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  title: string = '';

  constructor( private todoService: TodoService, private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  onAddTodo() {
  
    if (this.title) {
      this.todoService.addTodo({ title: this.title, completed: false })
      this.title = ''
    }
  }

  changeTheme(){
    this.themeService.toggleTheme();
  }


}
