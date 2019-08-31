import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './addTodo/addTodo.component';
import { ListTodoComponent } from './listTodo/listTodo.component';
import { ItemListTodoComponent } from './listTodo/itemListTodo/itemListTodo.component';
import { StatusTodoComponent } from './statusTodo/statusTodo.component';
import { FormsModule } from '@angular/forms';
import { ToDoService } from './toDo.service';

@NgModule({
   declarations: [
      AppComponent,
      AddTodoComponent,
      ListTodoComponent,
      ItemListTodoComponent,
      StatusTodoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [ToDoService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
