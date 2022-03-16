import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { IndexComponent } from './index/index.component';
import { MaterialModule } from '../material/material.module';
import { MainComponent } from './main/main.component';
import { BlogComponent } from './blog/blog.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { NewReportComponent } from './report/new-report/new-report.component';
import { FormReportComponent } from './report/shared/form-report/form-report.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    LayoutComponent,
    IndexComponent,
    MainComponent,
    BlogComponent,
    BlogViewComponent,
    NewReportComponent,
    FormReportComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatSelectModule,
  ]
})
export class HomeModule { }
