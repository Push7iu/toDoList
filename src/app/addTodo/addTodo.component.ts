import { ToDoService } from './../toDo.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './addTodo.component.html',
  styleUrls: ['./addTodo.component.css']
})
export class AddTodoComponent implements OnInit {
  // public items: {isCompleted: boolean, name: string, id: number}[];
  public items: string[];

  constructor(private todoService: ToDoService) { }

  ngOnInit() {
  }

  onAddTodo(formElement: NgForm) {
    this.todoService.addTodo(formElement);
  }

}
