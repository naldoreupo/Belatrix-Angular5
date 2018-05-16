import { NgModule } from '@angular/core';
import {FormsModule,NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Article } from '../_models/article.model';
import { ArticlesService } from '../shared/articles.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  constructor(private articleService: ArticlesService,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(obj: NgForm) {
    debugger;
    this.articleService.editArticle(obj.value).subscribe(
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
