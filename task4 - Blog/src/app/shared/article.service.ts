import { Article } from './article.model';



export class ArticleService {
  articles: Article[] = [];

  constructor() {
    this.articles = [
      {
        title: 'Man must explore, and this is exploration at its greatest',
        subtitle: 'Problems look mighty small from 150 miles up',
        author: 'Start Bootstrap',
        date: 'August 24, 2018'
      },
      {
        title: 'Man must explore, and this is exploration at its greatest',
        subtitle: 'Problems look mighty small from 150 miles up',
        author: 'Start Bootstrap',
        date: 'August 24, 2018'
      },
      {
        title: 'Man must explore, and this is exploration at its greatest',
        subtitle: 'Problems look mighty small from 150 miles up',
        author: 'Start Bootstrap',
        date: 'August 24, 2018'
      },
      {
        title: 'Man must explore, and this is exploration at its greatest',
        subtitle: 'Problems look mighty small from 150 miles up',
        author: 'Start Bootstrap',
        date: 'August 24, 2018'
      },
      {
        title: 'Man must explore, and this is exploration at its greatest',
        subtitle: 'Problems look mighty small from 150 miles up',
        author: 'Start Bootstrap',
        date: 'August 24, 2018'
      }
    ];
  }


  getArticles() {
    return this.articles;
  }
}
