import { Component } from '@angular/core';
import { Cours } from 'src/cours';
import {COURSES} from "../mock-courses"


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  
})

export class CourseComponent {

  courses = COURSES

  selectedCourse?: Cours;

  onSelect(course: Cours): void {
    this.selectedCourse = course;
  }

}
