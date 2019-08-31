import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  items: {isCompleted: boolean, name: string, id: number}[] = [
    {
      isCompleted: false,
      name: 'First Thing',
      id: 0
    },
    {
      isCompleted: true,
      name: 'Second Thing',
      id: 1
    },
    {
      isCompleted: false,
      name: 'Third Thing',
      id: 2
    }
  ];

  constructor() { }

  deleteItem(id: number) {
    this.items.splice(id, 1);
  }

  addTodo(formElement) {
    this.items.push({
      isCompleted: false,
      name: formElement.value.newTodo,
      id: this.items.length
    });
  }

}
