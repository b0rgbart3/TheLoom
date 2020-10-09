import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WelcomeComponent } from '../app/welcome/welcome.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { ClassService } from './services/class.service';
import { CourseService } from './services/course.service';
import { AssignmentsService } from './services/assignments.service';
import { UserService } from './services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Globals } from './globals2';


import { UsersResolver } from './resolvers/users.resolver';
import { CacheInterceptor } from './resolvers/cache.interceptor';
import { HttpCacheService } from './resolvers/cache';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login';
import { ReactiveFormsModule } from '@angular/forms';
// import { FlashMessagesModule } from 'angular2-flash-messages/module/module';
// import { AlertModule } from 'ngx-alerts';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './welcome/contact/contact.component';
import { ContactService } from './services/contact.service';
import { SignupComponent } from './users/signup/signup.component';
import { AlertService } from './services/alert.service';
// import { ClassThumbComponent } from './classes/class-list/class-thumb.component';
// import { UserThumbComponent } from './users/user-thumb/user-thumb.component';
// import { ClassListComponent } from './classes/class-list/class-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ContactComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule,
    // Specify your library as an import
    // AlertModule.forRoot({maxMessages: 5, timeout: 5000, positionX: 'right'})
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [
    AlertService,
    ClassService,
    CourseService,
    AssignmentsService,
    UserService,
    UsersResolver,
    ContactService,
    Globals,
    HttpCacheService,
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
