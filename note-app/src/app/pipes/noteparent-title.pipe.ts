import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noteparentTitle',
  standalone: true
})
export class NoteparentTitlePipe implements PipeTransform {

  transform(title: string, limit?: number):  string | null {
    if(!title){
      return null;
    }

    const maxLength = (limit) ? limit : 15

    if(title.length > maxLength){
      return title.substring(0, maxLength) + '...'
    }
    else{
      return title
    }
    
  }

}
