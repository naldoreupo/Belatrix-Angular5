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


  getList(sortValue : string):Observable<Article[]>{
      let jsonSent =   "_sort="+sortValue;
      return this.http.get<Article[]>(`${this.apiUrl}/articles?`+jsonSent).pipe();
  }

  newArticle(pArticle:any):Observable<Article>{
    let params : HttpParams= new HttpParams;   
    //params =  params.set("title",title);
   // params =  params.set("link",link);  
    
  console.log(pArticle);
 
    return this.http.post<Article>(`${this.apiUrl}/articles`,pArticle).pipe();   
  }
  
  editArticle(pArticle:any):Observable<Article>{
    let params : HttpParams= new HttpParams;   
    //params =  params.set("title",title);
   // params =  params.set("link",link);  
    
  console.log(pArticle);
 
    return this.http.put<Article>(`${this.apiUrl}/articles`,pArticle).pipe();   
  }
}
