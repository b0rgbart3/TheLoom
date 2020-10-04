import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ClassListComponent } from '../app/classes/class-list/class-list.component';
import { ClassService } from '../app/services/class.service';
import { WelcomeComponent } from '../app/welcome/welcome.component';

const loomRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', component: WelcomeComponent },
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




