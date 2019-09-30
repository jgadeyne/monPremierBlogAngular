import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Posts';

  PostListComponent = [
    {
      title: 'Mon premier post',
      content: 'Contenu du premier post'
    },
    {
      title: 'Mon deuxième post',
      content: 'Contenu du deuxième post'
    },
    {
      title: 'Et encore un post',
      content: 'Bonus : troisieme post'
    }
  ];

}




