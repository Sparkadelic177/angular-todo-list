import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = '';

  constructor() {
    this.title = "This is sparkys class"
    this.changeTitle(this.title);
  }

  changeTitle(name: string): void {
    this.title = "ChangedTitlee"
  }
}
