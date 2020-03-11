import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './course-add.component.html'
})
export class CourseAddComponent {

  constructor(private route: Router) {}

  course = new Course();

  save(form: NgForm): void {
    console.log('form', form)
    console.log('course', this.course)
  }

  back(): void {
    this.route.navigate(['/courses']);
  }
}
