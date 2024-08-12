import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noteTitle',
  standalone: true
})
export class NoteTitlePipe implements PipeTransform {

  transform(title: string):  string | null {
    if(!title){
      return null;
    }

    const maxLength = 33

    if(title.length > maxLength){
      return title.substring(0, maxLength) + '...'
    }
    else{
      return title
    }
    
  }

}
