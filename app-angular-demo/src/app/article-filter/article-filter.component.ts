import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Article } from '../_models/article.model';
import { ArticlesService } from '../shared/articles.service';

@Component({
  selector: 'app-article-filter',
  templateUrl: './article-filter.component.html',
  styleUrls: ['./article-filter.component.scss']
})
export class ArticleFilterComponent implements OnInit {
  @Output() emitEvent:EventEmitter<Article[]> = new EventEmitter<Article[]>();

  articles: Article[]; 
  listObservable: any;

  constructor(private articleService: ArticlesService) { }

  ngOnInit() {
    this.sortingBy('id');
   }

  sortingBy(sortValue : string) : Article[]{  

     let fResponse : Article[];

     this.articleService.getList(sortValue).subscribe(
      result => {
        this.articles = result;
        fResponse =result;
        this.emitEvent.emit(fResponse);
        return fResponse;
      },
      err => {
        console.log("error");
      }, () => {
        console.log("finalize");
      }
    )
    return fResponse;
  }
}
