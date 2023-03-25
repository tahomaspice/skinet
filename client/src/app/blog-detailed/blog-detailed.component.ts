import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BlogsService } from '../blogs/blogs.service';
import { Blog } from 'src/app/shared/models/blog';

@Component({
  selector: 'app-blog-detailed',
  templateUrl: './blog-detailed.component.html',
  styleUrls: ['./blog-detailed.component.scss']
})
export class BlogDetailedComponent implements OnInit {
  blog?: Blog;

  constructor(private blogsService: BlogsService, private route: ActivatedRoute, private bcService: BreadcrumbService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    id && this.blogsService.getBlogDetailed(+id).subscribe({
      next: blog => {
        this.blog = blog;
        this.bcService.set('@BlogDetailed', `Blog# ${blog.id} - ${blog.status}`);
      }
    })
    
  }

}
