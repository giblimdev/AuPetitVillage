//iteminfo.component.ts
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GetarticlesService } from '../getarticles.service';
@Component({
  selector: 'app-fiche',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './fiche.component.html',
  styleUrl: './fiche.component.scss',
})
export class FicheComponent {
  readonly route: ActivatedRoute = inject(ActivatedRoute);
  readonly articleService = inject(GetarticlesService);
  readonly articleId = String(this.route.snapshot.paramMap.get('id'));
  readonly article = signal(
    this.articleService.getArticleById(this.articleId)
  ).asReadonly();
}
