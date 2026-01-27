import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, map } from 'rxjs';
import { User } from './user.model';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class Httpclient {

  private usersUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  getUsersRemotely(): Observable<User[]> {
  const cachedUsers = localStorage.getItem('users');

  if (cachedUsers) {
    const parsedData = JSON.parse(cachedUsers);
    return of(parsedData.slice(0, 5));
  }

  return this.http
    .get<{ users: User[] }>(this.usersUrl)
    .pipe(
      map(response => response.users.slice(0, 5)),
      tap(users => localStorage.setItem('users', JSON.stringify(users)))
    );
  }


  getFivePosts(): Observable<Post[]> {
    return this.http.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
  }
}
