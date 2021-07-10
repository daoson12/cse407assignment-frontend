import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { CreateFacultyComponent } from './components/faculty/create-faculty/create-faculty.component';
import { FacultyListComponent } from './components/faculty/faculty-list/faculty-list.component';
import { CreateDepartmentComponent } from './components/department/create-department/create-department.component';
import { DepartmentListComponent } from './components/department/department-list/department-list.component';
import { CreateCourseComponent } from './components/courses/create-course/create-course.component';
import { CourseListComponent } from './components/courses/course-list/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavBarComponent,
    DashboardComponent,
    CreateFacultyComponent,
    FacultyListComponent,
    CreateDepartmentComponent,
    DepartmentListComponent,
    CreateCourseComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
