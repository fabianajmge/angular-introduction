import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent {

  constructor(private route: Router, private courseService: CourseService) {}

  course = new Course();

  save(form: NgForm): void {
    this.courseService.save(this.course).subscribe({
      next: course => console.log('Saved with sucess', course),
      error: err => console.log('Error', err)
  });
}

  back(): void {
    this.route.navigate(['/courses']);
  }
}
