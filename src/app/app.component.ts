import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

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

  search = '';
  searchField = 'title';

  posts: Post[] = [
    {title: 'Beer', text: 'I like beer. No. I lied.'},
    {title: 'Vodka', text: 'How can you drink it???'},
    {title: 'Vine', text: 'May be not?'},
    {title: 'Bee', text: 'bzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'}
  ];

}
