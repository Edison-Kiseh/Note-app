import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notebookTitle',
  standalone: true
})
export class NotebookTitlePipe implements PipeTransform {

  transform(title: string, limit?: number):  string | null {
    if(!title){
      return null;
    }

    const maxLength = (limit) ? limit : 17

    if(title.length > maxLength){
      return title.substring(0, maxLength) + '...'
    }
    else{
      return title
    }
  }

}
