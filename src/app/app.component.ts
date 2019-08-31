import { Component } from '@angular/core';
import { ToDoService } from './toDo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ToDoService]
})
export class AppComponent {
  title = 'toDo';
}
