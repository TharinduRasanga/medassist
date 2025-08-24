import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimPipe'
})
export class TrimPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
