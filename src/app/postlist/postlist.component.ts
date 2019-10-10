import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})

export class PostlistComponent implements OnInit, OnDestroy {
  title = 'Posts';
  lesposts: any[];
  postsListSubscription: Subscription;

  constructor(private postsService: PostsService){} //Intégration du service dans un component

  //On l'utilise très souvent pour initialiser des données une fois le component créé. méthode placé après le constructeur et avant les autres méthodes
  ngOnInit(){
    this.postsListSubscription = this.postsService.postsSubject.subscribe(
      (postsList: any[]) => {
        this.lesposts = postsList;
      }
    );
    this.postsService.emitPostsSubject();
  }

  onSave(){
    this.postsService.saveAPostsToServer();
  }

  onFetch(){
    this.postsService.getPostsFromServer();
  }

  ngOnDestroy() {
    this.postsListSubscription.unsubscribe();
  }

}
