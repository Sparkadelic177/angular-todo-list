import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from "../models/Todos"
import { HttpClient, HttpHeaders } from '@angular/common/http'


const httpHeader = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


//this class is exported to a constructor and binded to data 
export class TodoService {
  //url string for http call
  todo: string = "https://jsonplaceholder.typicode.com/todos?_limit=10";

  //injecting the Httpclient to the the private object
  constructor(private http: HttpClient) { }

  //this is going to return a observable, its a promise fuction
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todo)
  }

  //delete todo
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todo}/${todo.id}`;
    return this.http.delete<Todo>(url, httpHeader)
  }

  onToggleComplete(todo: Todo): Observable<any> {
    const url = `${this.todo}/${todo.id}`;
    return this.http.put(url, todo, httpHeader)
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todo, todo, httpHeader)
  }

} 
