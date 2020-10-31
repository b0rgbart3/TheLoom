import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin/admin.component';
import { AdminRouteActivator } from './admin/admin-route-activator';
import { ClassEditComponent } from './class-edit/class-edit.component';
import { CourseBuilderComponent } from './course-builder/course-builder.component';
import { Error404Component } from '../errors/404component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CoursesResolver } from '../resolvers/courses.resolver';
import { MaterialsResolver } from '../resolvers/materials-resolver';
import { MaterialEditComponent } from './material-edit-component/material-edit.component';
import { ClassesResolver } from '../resolvers/classes.resolver';
import { UsersResolver } from '../resolvers/users.resolver';
// import { PossibleInstructorsResolver } from '../resolvers/possible-instructors-resolver.service';
import { FileUploadModule } from 'ng2-file-upload';
import { SeriesEditComponent } from './series-edit/series-edit.component';
import { EnrollmentEditComponent } from './enrollments/enrollment-edit.component';
import { EnrollmentsResolver } from '../resolvers/enrollments.resolver';
import { AssignmentsResolver } from '../resolvers/assignments.resolver';
import { UserListComponent } from './admin/user-list/user-list.component';

import { ContentComponent } from './admin/content.component';
import { StudentsComponent } from './admin/students.component';
import { InstructorsComponent } from './admin/instructors.component';
import { SeriesResolver } from '../resolvers/series.resolver';
import { EnrollmentsComponent } from './admin/enrollments.component';
import { AssignmentsComponent } from './admin/assignments.component';
import { MaterialsAdminComponent } from './admin/materials-admin.component';
import { CourseEditGuard } from './course-edit/course-edit-guard.service';
import { CourseObjectEditComponent } from './courseObject-edit/courseObject-edit.component';
import { SectionEditComponent } from './courseObject-edit/section-edit.component';
import { CourseObjectEditGuard } from './courseObject-edit/courseObject-edit-guard.service';
import { NewMaterialModalComponent } from './courseObject-edit/new-material-modal.component';
import { MaterialEditGuard } from './material-edit-component/material-edit-guard.service';
import { MaterialLineItemComponent } from './courseObject-edit/material-line-item.component';
import { ClassResolver } from '../resolvers/class.resolver';
import { CourseResolver } from '../resolvers/course.resolver';




@NgModule ( {
    imports: [
        SharedModule,
        FileUploadModule,
        RouterModule.forChild([
            { path: 'admin', component: AdminComponent,
                canActivate: [ AdminRouteActivator ],
                resolve: { users: UsersResolver},
                children: [
                    { path: '', redirectTo: 'classes', pathMatch: 'full' },
                    { path: 'students', component: StudentsComponent, resolve: { users: UsersResolver,
                        classes: ClassesResolver, enrollments: EnrollmentsResolver }},
                    // { path: 'enrollments', component: EnrollmentsComponent, resolve: {
                    //     users: UsersResolver, classes: ClassesResolver, enrollments: AllEnrollmentsResolver }},
                    { path: 'instructors', component: InstructorsComponent,
                        resolve: { users: UsersResolver ,
                            classes: ClassesResolver, assignments: AssignmentsResolver }},
                    // { path: 'assignments', component: AssignmentsComponent, resolve: {
                    //     users: UsersResolver, classes: ClassesResolver, assignments: AllAssignmentsResolver }},
                    { path: 'classes/:id/edit', component: ClassEditComponent, resolve: { users: UsersResolver,
                        thisClass: ClassResolver, courses: CoursesResolver
                    }},
                    { path: 'classes', component: ContentComponent,
                    resolve: { users: UsersResolver,
                        classes: ClassesResolver, series: SeriesResolver, courses: CoursesResolver }},
                    { path: 'materials', component: MaterialsAdminComponent,
                    resolve: { courses: CoursesResolver, materials: MaterialsResolver}},

                    { path: 'courses/:id/edit', pathMatch: 'full', component: CourseEditComponent,
                    canDeactivate: [ CourseEditGuard ],
                    resolve: { course: CourseResolver,
                        allmaterials: MaterialsResolver }},

                    { path: 'courseObjects/:id/edit', pathMatch: 'full', component: CourseObjectEditComponent,
                    canDeactivate: [ CourseObjectEditGuard ],
                    resolve: { course: CourseResolver,
                        allmaterials: MaterialsResolver }},

                    { path: 'series/:id/edit', component: SeriesEditComponent,
                    canDeactivate: [ MaterialEditGuard ], resolve: { series: SeriesResolver} },
                    { path: 'book/:id/edit', component: MaterialEditComponent,
                    canDeactivate: [ MaterialEditGuard ], data: { type: 'book'}},

                    { path: 'image/:id/edit', component: MaterialEditComponent,
                    canDeactivate: [ MaterialEditGuard ], data: { type: 'image'}},

                    { path: 'doc/:id/edit', component:  MaterialEditComponent,
                    canDeactivate: [ MaterialEditGuard ], data: { type: 'doc' } },

                    { path: 'video/:id/edit', component:  MaterialEditComponent,
                    canDeactivate: [ MaterialEditGuard ], data: { type: 'video' } },

                    { path: 'audio/:id/edit', component:  MaterialEditComponent,
                    canDeactivate: [ MaterialEditGuard ], data: { type: 'audio' } },

                    { path: 'quote/:id/edit', component:  MaterialEditComponent,
                    canDeactivate: [ MaterialEditGuard ], data: { type: 'quote' } },

                   { path: 'block/:id/edit', component:  MaterialEditComponent,
                   canDeactivate: [ MaterialEditGuard ], data: { type: 'block' } },

                ]
            },



            { path: '404', component: Error404Component },
            { path: '', component: WelcomeComponent },
            { path: '**', redirectTo: '' }
        ])
    ],
    declarations: [
       AdminComponent,
       ClassEditComponent,
       CourseBuilderComponent,
       CourseEditComponent,
       MaterialEditComponent,
       SeriesEditComponent,
       EnrollmentEditComponent,
       UserListComponent,
       ContentComponent,
       StudentsComponent,
       InstructorsComponent,
       ContentComponent,
       EnrollmentsComponent,
       AssignmentsComponent,
       CourseObjectEditComponent,
       SectionEditComponent,
       MaterialsAdminComponent,
       NewMaterialModalComponent,
       MaterialLineItemComponent
    ],
    providers: [
        AdminRouteActivator,
        ClassResolver,
        UsersResolver,
        CourseResolver,
        SeriesResolver,
        CourseEditGuard,
        CourseObjectEditGuard,
        MaterialEditGuard
    ],
    exports: [
        AdminComponent,
        ClassEditComponent,
        CourseBuilderComponent,
        CourseEditComponent,
        MaterialEditComponent,
        SeriesEditComponent,
        EnrollmentEditComponent,
        UserListComponent,
        CourseObjectEditComponent,
        AssignmentsComponent,
        SectionEditComponent,
        MaterialsAdminComponent,
        NewMaterialModalComponent,
        MaterialLineItemComponent
    ]
})

export class AdminFeatureModule { }

