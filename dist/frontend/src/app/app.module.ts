import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms"


import { AppComponent } from './app.component';
import { BatchComponent } from './batch/batch.component';
import { LectureComponent } from './lecture/lecture.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';
import { BatchService } from './batch/batch.service';
import { LectureService } from './lecture/lecture.service';
import { SubjectService } from './subject/subject.service';
import { TeacherService } from './teacher/teacher.service';
import { StudentService } from './student/student.service';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BatchComponent,
    LectureComponent,
    CourseComponent,
    StudentComponent,
    SubjectComponent,
    TeacherComponent,
    HomeComponent,
    StudentDetailComponent
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'course', component: CourseComponent },
      {path:'courses/:courseId/batches/:batchId/lectures',component:LectureComponent},
      { path: 'batch/:id', component: BatchComponent },
      { path: 'students', component: StudentComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'students/:id', component: StudentDetailComponent },
      { path: 'teacher', component: TeacherComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
  ])
  ],
   bootstrap: [AppComponent],
   providers:[LectureService, SubjectService, TeacherService,StudentService, BatchService]
})
export class AppModule { }
