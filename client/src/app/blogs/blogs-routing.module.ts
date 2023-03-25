import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { BlogDetailedComponent } from '../blog-detailed/blog-detailed.component';

const routes: Routes = [
  {path: '', component: BlogsComponent},
  {path: ':id', component: BlogDetailedComponent, data: {breadcrumb: {alias: 'BlogDetailed'}}}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
