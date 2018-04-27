import { NgModule } from '@angular/core';
import {FormsModule,NgForm} from '@angular/forms';
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

  onSubmit(obj: NgForm) {
    debugger;
    this.articleService.newArticle(obj.value).subscribe(
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
    )
  }

}
