import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { Router } from '@angular/router';

@Component({
  templateUrl: './course-add.component.html'
})
export class CourseAddComponent {

  constructor(private route: Router) {}

  course: Course;

  save(): void {}

  back(): void {
    this.route.navigate(['/courses']);
  }
}
