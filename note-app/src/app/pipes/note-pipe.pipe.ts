import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notePipe',
  standalone: true
})
export class NotePipePipe implements PipeTransform {

  transform(title: string):  string | null {
    if(!title){
      return null;
    }

    const maxLength = 30

    if(title.length > maxLength){
      return title.substring(0, maxLength) + '...'
    }
    else{
      return title
    }
    
  }

}
