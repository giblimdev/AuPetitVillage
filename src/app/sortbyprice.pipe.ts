//tri-par-prix.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './article-model';
@Pipe({
  name: 'sortbyprice',
  standalone: true,
})
export class SortbypricePipe implements PipeTransform {
  transform(value: Article[], order: 'asc' | 'desc' = 'asc'): Article[] {
    return value.slice().sort((a, b) => {
      if (order === 'asc') {
        return a.prix - b.prix;
      } else {
        return b.prix - a.prix;
      }
    });
  }
}
