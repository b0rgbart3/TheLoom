import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ClassListComponent } from '../app/classes/class-list/class-list.component';
import { ClassService } from '../app/services/class.service';
import { WelcomeComponent } from '../app/welcome/welcome.component';
// import { ClassesResolver } from './resolvers/classes-resolver.service';
import { UsersResolver } from './resolvers/users.resolver';
import { CoursesResolver } from './resolvers/courses.resolver';
import { ClassesResolver } from './resolvers/classes.resolver';
import { AssignmentsResolver } from './resolvers/assignments.resolver';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './welcome/contact/contact.component';

const loomRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'contact', component: ContactComponent },
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
