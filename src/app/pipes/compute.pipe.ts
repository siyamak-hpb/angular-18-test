import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compute',
  standalone: true,
})
export class ComputePipe implements PipeTransform {
  transform(value: number, secound: number): string {
    console.log('compute pipe is execute');

    return (value + 1 + secound).toString();
  }
}
