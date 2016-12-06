import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(input:string, limit:number): any {
    if(input)
    return (input.length > length)? input.substr(0, limit)+'...':input;
  }

}
