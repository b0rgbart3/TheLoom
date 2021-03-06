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
// import { StudentsComponent } from './admin-feature-module/admin/students.component';
import { ClassService } from './services/class.service';
import { CourseService } from './services/course.service';
import { AssignmentsService } from './services/assignments.service';
import { UserService } from './services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Globals } from './globals2';

import { AdminFeatureModule } from './admin-feature-module/admin-feature.module';
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
import { RegisterComponent } from './users/register/register.component';
import { EnrollmentsService } from './services/enrollments.service';
import { EnrollmentsResolver } from './resolvers/enrollments.resolver';
import { AuthGuard } from './services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './materials/books/book.component';

import { MessageService } from './services/message.service';
import { LoomNotificationsService } from './services/loom.notifications.service';
import { MessagesResolver } from './resolvers/messages-resolver';
import { DiscussionService } from './services/discussion.service';
import { AnnouncementsService } from './services/announcements.service';
import { AssignmentsResolver } from './resolvers/assignments.resolver';
import { MaterialService } from './services/material.service';
import { DiscussionSettingsResolver } from './resolvers/discussion-settings-resolver';
import { AnnouncementsResolver } from './resolvers/announcements.resolver';
import { ClassCourseResolver } from './resolvers/class-course.resolver';
import { NotesService } from './services/notes.service';
import { NotesSettingsResolver } from './resolvers/notes-settings.resolver';
import { ClassComponent } from './classes/class/class.component';
import { SectionComponent } from './courses/course/section.component';
// import { MaterialComponent } from './materials/material.component';
import { MaterialCollection } from './models/materialcollection.model';
import { MaterialCollectionComponent } from './materials/material-collection/material-collection.component';
import { ImageComponent } from './materials/image/image.component';
import { DisplayMaterialsComponent } from './materials/display-materials/display-materials.component';
import { BlockComponent } from './materials/block/block.component';
import { DocComponent } from './materials/doc/doc.component';
import { AudioComponent } from './materials/audio/audio.component';
import { VideoComponent } from './materials/video/video.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { SeriesService } from './services/series.service';
import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';


// import { ClassThumbComponent } from './classes/class-list/class-thumb.component';
// import { UserThumbComponent } from './users/user-thumb/user-thumb.component';
// import { ClassListComponent } from './classes/class-list/class-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ContactComponent,
    SignupComponent,
    HomeComponent,
    RegisterComponent,
    ClassComponent,
    SectionComponent,
    MaterialCollectionComponent,
    BookComponent,
    AudioComponent,
    VideoComponent,
    DocComponent,
    BlockComponent,
    ImageComponent,
    DisplayMaterialsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    AdminFeatureModule,
    AppRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDialogModule,
    MatListModule,
    // Specify your library as an import
    // AlertModule.forRoot({maxMessages: 5, timeout: 5000, positionX: 'right'})
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [
    AlertService,
    AuthGuard,
    ClassService,
    CourseService,
    AssignmentsService,
    AssignmentsResolver,
    ClassCourseResolver,
    EnrollmentsService,
    EnrollmentsResolver,
    DiscussionSettingsResolver,
    AnnouncementsService,
    AnnouncementsResolver,
    AnnouncementsResolver,
    SeriesService,
    UserService,
    UsersResolver,
    LoomNotificationsService,
    NotesService,
    NotesSettingsResolver,
    ContactService,
    MessageService,
    MessagesResolver,
    MaterialService,
    DiscussionService,
    Globals,
    HttpCacheService,
    MatExpansionModule,
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    AdminFeatureModule,
    AppRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDialogModule,
    MatListModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
