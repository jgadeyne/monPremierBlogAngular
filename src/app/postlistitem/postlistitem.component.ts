import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostListItemComponent implements OnInit {

 @Input() postTitle: string;
 @Input() postContent: string;
 @Input() postIndex: number;

  postLoveIts: number = 0;
  postCreated_at: Date = new Date();


  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  getTitle() {
    return this.postTitle;
  }

  getContent() {
    return this.postContent;
  }

  getIndex() {
    return this.postIndex;
  }

  getLoveIts() {
    return this.postLoveIts;
  }

  getCreated_at() {
    return this.postCreated_at;
  }

  onLoveIt(){
    this.postLoveIts++;
  }

  onDontLoveIt(){
    this.postLoveIts--;
  }

  onDelete(){
    this.postsService.deletePost(this.postIndex);
  }

}
