import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Loom2020';
  users: User[];
  errorMessage: string;
  dataConnection: boolean;

  constructor( private router: Router) {
    console.log('In constructor');
  }

  ngOnInit(): void {
    this.errorMessage = null;
    this.dataConnection = false;

  }



}
