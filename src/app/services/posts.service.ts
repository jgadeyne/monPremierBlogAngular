import { Injectable } from '@angular/core';
import { PostListItemComponent } from '../postlistitem/postlistitem.component';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';

/*
@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class PostsService {

  postsSubject = new Subject<any[]>();

  private postList = [];

  constructor(private httpClient: HttpClient) { }
  
  //Pour la souscription et l'émission du Subject, pensez à l'ordre des opérations.
  emitPostsSubject() {
    this.postsSubject.next(this.postList.slice());
  }

  addPost(post: Post) {
    this.postList.push(post);
    this.emitPostsSubject();
  }

  deletePost(i: number) { 
    this.postList.splice(i,1);
    this.emitPostsSubject();
  }

  saveAPostsToServer() {
    this.httpClient
      .put('https://http-client-demo-62ee8.firebaseio.com/posts.json', this.postList)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}

getPostsFromServer() {
  this.httpClient
    .get<any[]>('https://http-client-demo-62ee8.firebaseio.com/posts.json')
    .subscribe(
      (response) => {
        this.postList = response;
        this.emitPostsSubject();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}

}
