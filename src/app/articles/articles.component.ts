//articles.component.ts
import { Component, signal, computed, inject } from '@angular/core';
import { GetarticlesService } from '../getarticles.service';
import { CurrencyPipe } from '@angular/common';
import { SortbypricePipe } from '../sortbyprice.pipe';
import { ArticlesDirective } from '../articles.directive';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CurrencyPipe, SortbypricePipe, ArticlesDirective, RouterLink],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent {
  readonly articleService = inject(GetarticlesService);
  readonly articleList = signal(this.articleService.getArticleLISTE());
  readonly searchName = signal('');
  sortOrder: 'asc' | 'desc' = 'asc';
  sortArticles(order: 'asc' | 'desc') {
    this.sortOrder = order;
  }

  readonly articleListFiltered = computed(() => {
    return this.articleList().filter((article) =>
      article.nom.toLowerCase().includes(this.searchName().trim().toLowerCase())
    );
  });
}
