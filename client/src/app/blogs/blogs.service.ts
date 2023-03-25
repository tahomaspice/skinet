import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Blog } from '../shared/models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  baseUrl= environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllBlogs() {
    return this.http.get<Blog[]>(this.baseUrl + 'blogs');
  }
  getBlogDetailed(id: number) {
    return this.http.get<Blog>(this.baseUrl + 'blogs/' + id);

  }
}
