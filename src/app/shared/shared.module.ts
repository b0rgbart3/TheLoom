import { NgModule } from '@angular/core';
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



@NgModule ( {
    imports: [
        FormsModule, ReactiveFormsModule,
        MatMenuModule,
        MatIconModule,
        RouterModule,
        BrowserModule,
    ],
    declarations: [
        ClassListComponent,
        ClassThumbComponent,
        UserThumbComponent,
        NavBarComponent
    ],
    providers: [
        FormsModule, ReactiveFormsModule,
        MatMenuModule,
        MatIconModule,
        RouterModule,
        BrowserModule,
    ],
    exports: [
        ClassListComponent,
        ClassThumbComponent,
        UserThumbComponent,
        NavBarComponent
    ]

})

export class SharedModule {}

