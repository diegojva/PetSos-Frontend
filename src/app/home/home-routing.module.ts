import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogComponent } from './blog/blog.component';
import { IndexComponent } from './index/index.component';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { NewReportComponent } from './report/new-report/new-report.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
     /* {
        path: '',
        component: IndexComponent,
      },*/
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'adopta',
        component: IndexComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'blog/:id/post-view',
        component: BlogViewComponent,
      },
      {
        path: 'report/new',
        component: NewReportComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
