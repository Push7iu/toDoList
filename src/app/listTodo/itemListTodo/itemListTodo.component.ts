import { ToDoService } from './../../toDo.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-list-todo',
  templateUrl: './itemListTodo.component.html',
  styleUrls: ['./itemListTodo.component.css']
})
export class ItemListTodoComponent implements OnInit {

  @Input() item: {isCompleted: boolean, name: string, id: number};
  @Input() index: boolean;
  constructor(private todoService: ToDoService) { }

  ngOnInit() {
  }

  onChangeStatus(index) {
    this.todoService.changeStatus(index);
  }

  onDeleteItem(index) {
    this.todoService.deleteItem(index);
  }
}
