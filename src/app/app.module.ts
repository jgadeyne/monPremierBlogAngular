import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostListItemComponent } from './postlistitem/postlistitem.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostsService } from './services/posts.service';
import { NewPostComponent } from './newpost/newpost.component';
import { Routes, RouterModule } from '@angular/router';
import { FourohfourComponent } from './fourohfour/fourohfour.component';
import { HttpClientModule} from '@angular/common/http'


//On crée une constante de type  Routes  (qu'on importe depuis  @angular/router ) qui est un array d'objets JS 
const appRoutes: Routes = [
  { path: 'posts', component: PostlistComponent },
  { path: 'new', component: NewPostComponent },
  { path: '', component: PostlistComponent },
  { path: 'not-found', component: FourohfourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    PostlistComponent,
    NewPostComponent,
    FourohfourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
      ],
  providers: [PostsService], //ajout du service de manière globale, Angular crée maintenant une instance du service pour l'application entière
  bootstrap: [AppComponent]
})
export class AppModule { }
