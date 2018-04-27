import { Component, OnInit,ViewChild, Input,Output,EventEmitter  } from '@angular/core';
import { ArticleFilterComponent } from '../article-filter/article-filter.component';
import { ArticlesListComponent } from '../articles-list/articles-list.component';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { CounterActions } from '../../store/app.action';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-manager-articles',
  templateUrl: './manager-articles.component.html',
  styleUrls: ['./manager-articles.component.scss']
})
export class ManagerArticlesComponent implements OnInit {
  @ViewChild('child1') childOne:ArticleFilterComponent  ;
  @ViewChild('child2') childtwo:ArticlesListComponent ;

  @select()   readonly count$:Observable<number>;
  
  constructor(private counterActions:CounterActions)  {    
  } 

  ngOnInit() {
    this.childOne.emitEvent
    .subscribe(
      res =>
      {
        this.childtwo.articles = res;
      }
    );
 
  } 

  increment(){
    this.counterActions.increment();

  }
  decrement(){
    this.counterActions.decrement();
  }

}
