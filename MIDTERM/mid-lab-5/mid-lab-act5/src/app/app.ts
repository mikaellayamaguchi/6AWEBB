import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from './user.model';
import { Httpclient } from './httpclient';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']

})

export class App implements OnInit {
  posts: Post[] = [];
  protected readonly title = signal('http-client-demo');
  httpusers: User[] = [];

  constructor(private httpClient: Httpclient) {}

  ngOnInit() {
    // 1. Fetch Users
    this.httpClient.getUsersRemotely().subscribe((data) => {
      this.httpusers = data;
    });

    // 2. Fetch Challenge Posts
    this.httpClient.getFivePosts().subscribe((data) => {
      this.posts = data;
    });
  }

  trackById(index: number, post: Post) {
  return post.id;
}

}
