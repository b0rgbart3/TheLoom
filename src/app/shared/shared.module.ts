import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ClassThumbComponent } from '../classes/class-list/class-thumb.component';
import { UserThumbComponent } from '../users/user-thumb/user-thumb.component';
import { ClassListComponent } from '../classes/class-list/class-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule ( {
    imports: [

        FormsModule, ReactiveFormsModule

    ],
    declarations: [
        ClassListComponent,
        ClassThumbComponent,
        UserThumbComponent

    ],
    providers: [
        FormsModule, ReactiveFormsModule
    ],
    exports: [
        ClassListComponent,
        ClassThumbComponent,
        UserThumbComponent

    ]

})

export class SharedModule {}

