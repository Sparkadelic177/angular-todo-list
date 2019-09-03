import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from "../../service/todo.service"
import { Todo } from "../../models/Todos"

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo; //the prop being mapped to this component called
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter(); //output todo to parent class

  constructor(private todoService: TodoService) { }

  ngOnInit() {

  }

  //create dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      "is-completed": this.todo.completed,
    }

    return classes;
  }

  onToggle(todo) {
    //toggle in ui
    console.log("toggle");
    todo.completed = !todo.completed;
    //toggle on server
    this.todoService.onToggleComplete(todo)
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo); //emitting this to parent class
  }

}
