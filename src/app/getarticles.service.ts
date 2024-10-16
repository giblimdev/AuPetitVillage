//getarticles.service.ts
import { Injectable } from '@angular/core';
import { Article, ArticleList } from './article-model';
import { ARTICLE_LIST } from './ArticlesLISTE';
@Injectable({
  providedIn: 'root',
})
export class GetarticlesService {
  // retourne la liste de tous les articles
  getArticleLISTE(): ArticleList {
    return ARTICLE_LIST;
  }

  getArticleById(id: string): Article {
    const article = ARTICLE_LIST.find((article) => article.id === id);

    if (!article) {
      throw new Error(`No Article found with id ${id}`);
    }

    return article;
  }
}
