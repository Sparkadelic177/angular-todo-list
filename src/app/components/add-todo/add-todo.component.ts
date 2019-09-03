import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title: string;

  //when this value is outputed the parent class needs to catch this 
  //catch where this component tag is being placed
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  //this methods needs to push the object back up the chain to the parent class
  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    }

    //this.addTodo is defind by the output
    this.addTodo.emit(todo);
  }

}
