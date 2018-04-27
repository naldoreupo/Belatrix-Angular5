import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleComponent } from './article/article.component';
import { ManagerArticlesComponent } from './manager-articles/manager-articles.component';
import { ArticlesService } from './shared/articles.service';
import { HttpClientModule } from '@angular/common/http';
import { ArticleNewComponent } from './article-new/article-new.component';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { CounterActions } from '../store/app.action';
import { IAppState, rootReducer, INITIAL_STATE } from '../store/reducer';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticleComponent,
    ManagerArticlesComponent,
    ArticleNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgReduxModule 
  ],
  providers: [ArticlesService,CounterActions],
  bootstrap: [AppComponent]

})
export class AppModule { 
  constructor(ngRedux:NgRedux<IAppState>,private devTools:DevToolsExtension){

    const enhancers= isDevMode()&& devTools.isEnabled() ? [devTools.enhancer()]:[];
    ngRedux.configureStore(
      rootReducer,INITIAL_STATE,[],enhancers
    )
  }
}
