
import { NgModule, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Article } from '../_models/article.model';
import { ArticlesService } from '../shared/articles.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  @Input()  articles: Article[];
  title = 'awoifkashfk!';
  listObservable: any;

  constructor(private articleService: ArticlesService) {
  }
  ngOnInit() {
   // this.loadList('id');
  }

  /*sortingBy(sortValue : string) {
    this.loadList(sortValue);
  }

  loadList(sortValue : string) {
    this.articleService.getList(sortValue).subscribe(
      result => {
        this.articles = result;
      },
      err => {
        console.log("error");
      }, () => {
        console.log("finalize");
      }
    )
  }*/

}
