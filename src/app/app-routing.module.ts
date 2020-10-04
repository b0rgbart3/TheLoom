import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ClassListComponent } from '../app/classes/class-list/class-list.component';
import { ClassService } from '../app/services/class.service';
import { WelcomeComponent } from '../app/welcome/welcome.component';
// import { ClassesResolver } from './resolvers/classes-resolver.service';
import { UsersResolver } from './resolvers/users.resolver';
// import { UserResolver } from './resolvers/user-resolver';
// import { CoursesResolver } from './resolvers/courses-resolver.service';
// import { ClassResolver } from './resolvers/class-resolver.service';

const loomRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: '**', component: WelcomeComponent, resolve: {
      users: UsersResolver,
      // courses: CoursesResolver,
      // classes: ClassesResolver
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




