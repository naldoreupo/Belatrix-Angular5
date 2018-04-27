import { Injectable } from '@angular/core';
import { Article } from '../_models/article.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable()
export class ArticlesService {
  articles:Article[];
  apiUrl: string="http://localhost:3000";

  constructor(private http:HttpClient) { 

  }

  addArticle(title:HTMLInputElement, link:HTMLInputElement){
    this.articles.push(new Article(title.value, link.value,0));
  }

  getList(sortValue : string):Observable<Article[]>{
      let jsonSent =   "_sort="+sortValue;
      return this.http.get<Article[]>(`${this.apiUrl}/articles?`+jsonSent).pipe();
  }

  newArticle(title,link):Observable<Article>{
    let params : HttpParams= new HttpParams;   
    params =  params.set("title",title);
    params =  params.set("link",link);  
    
    let jsonSent =
    {
      "title":title,
      "link":link,
      "votes":0
    }    
 
    return this.http.post<Article>(`${this.apiUrl}/articles`,jsonSent).pipe();   
  }
}
