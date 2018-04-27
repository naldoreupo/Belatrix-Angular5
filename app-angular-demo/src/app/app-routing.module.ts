import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerArticlesComponent } from './manager-articles/manager-articles.component';
import { ArticleNewComponent } from './article-new/article-new.component';


let routes: Routes = [
    { path: '', component: ManagerArticlesComponent},
    { path: 'NewArticle', component: ArticleNewComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:false})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }