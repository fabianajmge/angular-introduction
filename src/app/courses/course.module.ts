import { NgModule } from '@angular/core';
import { CourseAddComponent } from './course-add.component';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarModule } from '../shared/component/star/star.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';

@NgModule({
    declarations: [
        CourseAddComponent,
        CourseInfoComponent,
        CourseListComponent
    ],
    imports: [
        CommonModule,
        StarModule,
        AppPipeModule,
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