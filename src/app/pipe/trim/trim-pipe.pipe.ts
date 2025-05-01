import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'trim' })
export class TrimPipePipe implements PipeTransform {
  transform(value: string): string {
    return value?.replace(/[ ,]/g, '') || '';
  }
}
