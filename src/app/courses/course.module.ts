import { NgModule } from '@angular/core';
import { CourseAddComponent } from './course-add.component';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from '../pipe/replace.pipe';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../star/star.component';

@NgModule({
    declarations: [
        CourseAddComponent,
        CourseInfoComponent,
        CourseListComponent,
        ReplacePipe,
        StarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            {
                path: 'courses/add', component: CourseAddComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})
export class CourseModule { }