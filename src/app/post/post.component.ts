import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

 @Input() postTitle: string;
 @Input() postContent: string;

  postLoveIts: number = 0;
  postCreated_at: Date = new Date();


  constructor() { }

  ngOnInit() {
  }

  getTitle() {
    return this.postTitle;
  }

  getContent() {
    return this.postContent;
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

}
