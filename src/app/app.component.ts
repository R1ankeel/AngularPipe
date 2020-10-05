import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  e: number = Math.E;
  str = 'yo man';
  date: Date = new Date();
  float = 0.42;
  obj = {
    a: 1,
    b: {
      a: 2,
      c: 3,
      d: {
        a: 4,
        b: 5,
        c: 6
      }
    }
  };
}
