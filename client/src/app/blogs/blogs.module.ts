import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { BlogDetailedComponent } from '../blog-detailed/blog-detailed.component';
import { BlogsRoutingModule } from './blogs-routing.module';



@NgModule({
  declarations: [
    BlogsComponent, 
    BlogDetailedComponent,
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
