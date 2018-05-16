import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerArticlesComponent } from './manager-articles/manager-articles.component';
import { ArticleNewComponent } from './article-new/article-new.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register';
import { HomeComponent } from './home/home.component';
import { RouteComponent } from './shared/router.component';
import { AuthGuard } from './_guards';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { AboutComponent } from './about/about.component';
/*let routes: Routes = [
    { path: '', component: ManagerArticlesComponent},
    { path: 'NewArticle', component: ArticleNewComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
*/

let routes: Routes = [
  { path: '', component: HomeComponent},
  {
    path:'list',
    component:RouteComponent,
    canActivate:[AuthGuard],
    children:[
      { path: '', component: ManagerArticlesComponent},
      { path: 'new-article', component: ArticleNewComponent},
    ]
  },
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
 //{ path: '**', redirectTo: '', pathMatch: 'full' },
  { path: 'edit-article/:id', component:ArticleEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:false})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }