//article.ts
export interface Article {
  id: string;
  nom: string;
  description: string;
  image: string;
  prix: number;
}
export type ArticleList = Article[];
