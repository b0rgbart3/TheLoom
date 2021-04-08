import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from '../navbar/nav-bar.component';
import { ClassThumbComponent } from '../classes/class-list/class-thumb.component';
import { UserThumbComponent } from '../users/user-thumb/user-thumb.component';
import { ClassListComponent } from '../classes/class-list/class-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../directives/clickoutside.directive';
import { BiopopComponent } from '../classes/class/biopop.component';
import { ClassComponent } from '../classes/class/class.component';
import { SectionComponent } from '../courses/course/section.component';
import { MaterialComponent } from '../materials/material.component';
import { SeriesService } from '../services/series.service';
import { UserService } from '../services/user.service';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule ( {
    imports: [
        FormsModule, ReactiveFormsModule,
        MatMenuModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        BrowserModule,
        MatExpansionModule,
    ],
    declarations: [
        ClassListComponent,
        ClassThumbComponent,
        UserThumbComponent,
        NavBarComponent,
        ClickOutsideDirective,
        BiopopComponent,
        NavBarComponent,
    ],
    providers: [
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatIconModule,
        RouterModule,
        BrowserModule,
        CommonModule,
        SeriesService,
        UserService,
    ],
    exports: [
        ClassListComponent,
        ClassThumbComponent,
        UserThumbComponent,
        NavBarComponent,
        ClickOutsideDirective,
        BiopopComponent,
        NavBarComponent,
        BrowserModule,
        CommonModule,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})

export class SharedModule {}

