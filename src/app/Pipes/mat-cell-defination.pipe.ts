import { TemplateLiteral } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matCellDefination'
})
export class MatCellDefinationPipe implements PipeTransform {

  transform(value: Object, name: string): unknown {
    let values = Object.values(value);
    let keys = Object.keys(value);
    let index = 0;
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] == name) {
        index = i;
      }
    }


    return values[index];
  }
}
