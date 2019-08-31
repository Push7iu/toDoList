import { ToDoService } from './../toDo.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './listTodo.component.html',
  styleUrls: ['./listTodo.component.css']
})
export class ListTodoComponent implements OnInit {
  items: {isCompleted: boolean, name: string, id: number}[];

  constructor(private todoService: ToDoService) { }

  ngOnInit() {
    this.items = this.todoService.items;
    console.log(this.items);
  }

}
