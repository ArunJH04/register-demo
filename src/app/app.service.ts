import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getPosts() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url);
  }
}
