import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../app.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', field = ''): Post[] {
    if (!search.trim()){
      return posts;
    }

    return posts.filter(post => {
      return post[field].toLowerCase().includes(search.toLowerCase());
    });
  }

}
