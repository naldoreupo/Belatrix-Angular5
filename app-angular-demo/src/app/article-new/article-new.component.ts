import {NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Article } from '../_models/article.model';
import { ArticlesService } from '../shared/articles.service';


@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.scss']
})
export class ArticleNewComponent implements OnInit {

  constructor(private articleService: ArticlesService,private router: Router) { }

  ngOnInit() {
  }

  //addArticle(title,link) {
  addArticle(f: NgForm) {
    debugger;
    //console.log(title+link);

    //this.articleService.newArticle(title,link).subscribe(
   /* this.articleService.newArticle(title,link).subscribe(
    //  debugger;
      result => {
        debugger;
        console.log('Done');
        this.router.navigate(['/']);
      },
      err => {
        console.log("error");
      }, () => {
        console.log("");
      }
    )*/
  }

}
