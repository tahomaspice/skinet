import { Component, OnInit } from '@angular/core';
import { Blog } from '../shared/models/blog';
import { BlogsService } from './blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogsService) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    this.blogService.getAllBlogs().subscribe({
      next: blogs => this.blogs = blogs
    })

  }

}
