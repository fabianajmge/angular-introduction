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
  image: any = null;

  save(form: NgForm): void {
    console.log('img', this.course)
    this.courseService.save(this.course).subscribe({
      next: course => console.log('Saved with sucess', course),
      error: err => console.log('Error', err)
  });
}

  back(): void {
    this.route.navigate(['/courses']);
  }

  readUrlImage(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.image = (<FileReader>event.target).result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
