import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { AppComponent } from './app.component';
import { ArticleFilterComponent } from './article-filter/article-filter.component';
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
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RouteComponent } from './shared/router.component';

@NgModule({
  declarations: [
    ArticleFilterComponent,
    AppComponent,
    ManagerArticlesComponent,
    ArticlesListComponent,
    ArticleComponent,
    ArticleNewComponent,
    ArticleEditComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    RouteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgReduxModule ,
    FormsModule,                             
    ReactiveFormsModule
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
