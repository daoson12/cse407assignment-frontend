import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { CreateCourseComponent } from './components/courses/create-course/create-course.component';
import { CreateDepartmentComponent } from './components/department/create-department/create-department.component';
import { DepartmentListComponent } from './components/department/department-list/department-list.component';
import { CreateFacultyComponent } from './components/faculty/create-faculty/create-faculty.component';
import { FacultyListComponent } from './components/faculty/faculty-list/faculty-list.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { HomeComponent } from './layouts/home/home.component';


const routes: Routes = [

  {
    path:'', component:HomeComponent,
    children:[
      {
        path:'', component:DashboardComponent
      },
      
      {
        path:'create-faculty', component:CreateFacultyComponent
      },
      {
        path:'faculty-list', component:FacultyListComponent
      },
      {
        path:'create-department', component:CreateDepartmentComponent
      },
      {
        path:'department-list', component: DepartmentListComponent
      },
      {
        path:'create-course', component:CreateCourseComponent
      },
      {
        path:'course-list', component:CourseListComponent
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
