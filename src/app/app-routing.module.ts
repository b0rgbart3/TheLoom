import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ClassListComponent } from '../app/classes/class-list/class-list.component';
import { ClassService } from '../app/services/class.service';
import { WelcomeComponent } from '../app/welcome/welcome.component';
import { UsersResolver } from './resolvers/users.resolver';
import { CoursesResolver } from './resolvers/courses.resolver';
import { ClassesResolver } from './resolvers/classes.resolver';
import { EnrollmentsResolver } from './resolvers/enrollments.resolver';
import { AssignmentsResolver } from './resolvers/assignments.resolver';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './welcome/contact/contact.component';
import { SignupComponent } from './users/signup/signup.component';
import { RegisterComponent } from './users/register/register.component';
import { AuthGuard } from './services/auth-guard.service';
import { AllDiscussionSettingsResolver } from './resolvers/alldiscussion-settings-resolver';
import { AllMaterialsResolver } from './resolvers/all-materials.resolver';
import { DiscussionSettingsResolver } from './resolvers/discussion-settings-resolver';
import { ClassComponent } from './classes/class/class.component';
import { AllAnnouncementsResolver } from './resolvers/allannouncements.resolver';
import { MessagesResolver } from './resolvers/messages-resolver';
import { NotesSettingsResolver } from './resolvers/notes-settings.resolver';
import { AnnouncementsResolver } from './resolvers/announcements.resolver';
import { ClassCourseResolver } from './resolvers/class-course.resolver';
import { MaterialsResolver } from './resolvers/materials-resolver';

const loomRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'signup', component: SignupComponent,
    resolve: {
      resolvedUsers: UsersResolver,
    }
  },
  {
    path: 'register/:id', component: RegisterComponent, canActivate: [AuthGuard],
    resolve: {
      resolvedUsers: UsersResolver,
      requestedClass: ClassesResolver,
      resolvedCourses: CoursesResolver,
      enrollments: EnrollmentsResolver,
      assignments: AssignmentsResolver
    }
  },

  {
    path: 'classes/:id', canActivate: [AuthGuard], resolve: {
      allDSObjects: AllDiscussionSettingsResolver,
      classes: ClassesResolver,
      users: UsersResolver,
      assignments: AssignmentsResolver,
      enrollments: EnrollmentsResolver,
      allMaterials: AllMaterialsResolver,
      courses: CoursesResolver,
      messages: MessagesResolver,
      discussionSettings: DiscussionSettingsResolver
    },
    children: [{
      path: ':id2', pathMatch: 'full', component: ClassComponent,
      resolve: {
        allAnnouncements: AllAnnouncementsResolver,
        announcements: AnnouncementsResolver,
        thisCourse: ClassCourseResolver,
        classMaterials: MaterialsResolver,
        discussionSettings: DiscussionSettingsResolver,
        notesSettings: NotesSettingsResolver,
        messages: MessagesResolver
      }
    }]
  },
  {
    path: 'classes', component: HomeComponent, canActivate: [AuthGuard],
    resolve: {
      resolvedUsers: UsersResolver,
      resolvedClasses: ClassesResolver,
      resolvedCourses: CoursesResolver,
      resolvedEnrollments: EnrollmentsResolver,
      resolvedAssignments: AssignmentsResolver,
      resolvedMessages: MessagesResolver
    }
  },


  {
    path: '**', component: WelcomeComponent,

    resolve: {
      resolvedUsers: UsersResolver,
      resolvedCourses: CoursesResolver,
      resolvedClasses: ClassesResolver,
      resolvedAssignments: AssignmentsResolver
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(loomRoutes)],
  declarations: [
  ],
  providers: [
    ClassService

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }




// Note:  Taking off the resolvers solved the memory leak issue on Heroku deployment.
