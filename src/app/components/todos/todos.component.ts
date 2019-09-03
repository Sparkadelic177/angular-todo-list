import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/Todos";
import { TodoService } from "../../service/todo.service"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos: Todo[]; //an arrray of objects that we defind in the models folder

  //importing the service to a private object callded todoService 
  //This todo service holds all the of the methods inside the servuce version of TodoService
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    //getting the array of todos from the api
    this.todoService.getTodos().subscribe(todos => {
      console.log(todos);
      return this.todos = todos;
    });

  }

  deleteTodo(todo: Todo) {
    //delete from the UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    //delete from the server
    this.todoService.deleteTodo(todo).subscribe(result => {
      console.log(`I deleted this ${result}`)
    })
  }

  addTodo(todo: Todo) {
    //make a post request from the service
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}
