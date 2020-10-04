import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { ClassModel } from '../models/class.model';
import { CommonModule } from '@angular/common';
// import { UserService } from '../services/user.service';
// import { ClassService } from '../services/class.service';
import { Course } from '../models/course.model';
import { Assignment } from '../models/assignment.model';

@Component({
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css']
})

export class WelcomeComponent implements OnInit {
    username;
    currentUser: User;
    classes: ClassModel[];
    courses: Course[];
    assignments: Assignment[];
    instructorsByClass: any[];
    errorMessage: string;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute) {

    }

    login(): void {
        this.router.navigate(['/login']);
    }

    ngOnInit(): void {
        // console.log('snapshot: ' + JSON.stringify(this.activatedRoute.snapshot.data));
      //  this.currentUser = this.userService.getCurrentUser();
        console.log('In Welcome, currentUser: ' + JSON.stringify(this.currentUser));
       // this.classes = [];
        this.activatedRoute.data.subscribe(
            data => {
                //   console.log('got data: ' + JSON.stringify(data));
                this.grabData();
            }, err => {
                // console.log('error retrieving data');
            }, () => {
                // console.log('Data finished: ');
                this.grabData();
            }
        );

    }

    grabData(): void {
      //  this.courses = this.activatedRoute.snapshot.data.courses;
      //  this.classes = this.activatedRoute.snapshot.data.classes;
        // console.log('Classes: ' + JSON.stringify(this.classes));
       // this.assignments = this.activatedRoute.snapshot.data.assignments;
        this.loadInstructors();
    }
    loadInstructors(): void {
        this.instructorsByClass = [];

        // if (this.classes) {
            // for (let i = 0; i < this.classes.length; i++) {
            //     this.instructorsByClass[i] = [];
            //     this.userService.getInstructorsForClass(this.classes[i].id).subscribe(data => this.instructorsByClass[i] = data,
            //         err => console.log('error getting instructors'));
            // }
            // for (let i = 0; i < this.instructorsByClass.length; i++) {
            //     // these are assignment objects
            //     for (let j = 0; j < this.instructorsByClass[i].length; j++) {
            //         this.instructorsByClass[i][j].user = this.userService.getUserFromMemoryById(this.instructorsByClass[i][j].userId);
            //     }
            // }
      //  }
    }
}
