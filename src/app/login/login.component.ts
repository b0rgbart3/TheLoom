﻿import { Component, OnInit, Output, AfterViewInit } from '@angular/core';
import { User } from '../models/user.model';
// import { FlashMessagesService } from 'angular2-flash-messages';
import { RouterModule, Routes, NavigationExtras, Router } from '@angular/router';
import { UserService } from '../services/user.service';
// import { AlertService } from '../services/alert.service';
import { Globals } from '../globals2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { LoomNotificationsService } from '../services/loom.notifications.service';
// import { LoomNotification } from '../models/loom.notification.model';
import { DataError } from '../models/dataerror.model';

import { ToastrService } from 'ngx-toastr';

@Component({
  // moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit, AfterViewInit {

  model = {} as User;
  loading = false;
  error = '';
  message: string;
  // initParams: InitParams;
  // alreadyConnectedThruFB: boolean;
  // connectedThruFB: boolean;
  // FBProfile: any;
  currentUser: User;
  // newFBUser: User;
  users: User[];
  errorMessage: string;
  loginForm: FormGroup;
  redirect: boolean;
  redirectMsg: string;

  constructor(
    // private alertService: AlertService,
    // private flashMessagesService: FlashMessagesService,
    private myRouter: Router,
    private toastr: ToastrService,
    private userService: UserService,
    private globals: Globals,
    private formBuilder: FormBuilder,

    //    private alertService: AlertService
    // private flashMessage: FlashMessagesService
    //  private notes: LoomNotificationsService
  ) { }

  ngOnInit(): void {

    if (this.userService.redirectUrl && this.userService.redirectMsg) {
      this.redirect = true;
      this.redirectMsg = this.userService.redirectMsg;
    }
    this.userService.getUsers().subscribe(
      users => {
        if (users instanceof DataError) {
          this.users = null;
        } else {
          this.users = users;
        }
      },
      error => this.errorMessage = error);
    // Yes, we are starting right off the bat with checking the FB login status
    // We are therefore forever linked and connected to the evil empire
    // this.initFB();
    this.currentUser = this.userService.getCurrentUser();

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  //   onSubmitModelBased(): void {
  //     console.log('model-based form submitted');
  //     console.log(this.loginForm);
  // }

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }

  keyDownFunction(event): void {
    if (event.keyCode === 13) {
      this.login();
    }
  }

  // showFlash(): void {
  //   // 1st parameter is a flash message text
  //   // 2nd parameter is optional. You can pass object with options.
  //   this.flashMessage.show('Welcome To TheRichPost.com', { cssClass: 'custom-success', timeout: 1000 });
  // }
  // showAlerts(): void {
  //   this.alertService.info('this is an info alert');
  //   this.alertService.danger('this is a danger alert');
  //   this.alertService.success('this is a success alert');
  //   this.alertService.warning('this is a warning alert');
  // }

  showSuccess(): void {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  login(): void {
    console.log('In login method');
    this.loading = true;
    // this.loginForm.get('username').value, this.loginForm.get('password').value
    this.userService.login(this.loginForm.value)
      .subscribe(
        (data: User) => {
          this.currentUser = data;
          this.userService.setCurrentUser(this.currentUser);
          this.toastr.success('Thanks for logging in!');
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        },
        (err: any) => {
          this.errorMessage = err; console.log('improper creds.', err);
          this.toastr.error('Oops.  Wrong credentials.   Please try again.');
        },
        () => {
          console.log('Got all users.', this.currentUser);
          this.continue();
        }
      );
  }


  continue(): void {
    if (this.userService.redirectUrl) {
      const wantedURL = this.userService.redirectUrl;
      // this.userService.redirectUrl = ''; // clear it out
      //  this.userService.redirectMsg = '';

      this.myRouter.navigateByUrl(this.userService.redirectUrl);
    } else {
      this.myRouter.navigate(['/home']);
    }
    console.log('AUTHENTICATED! - : ' + JSON.stringify(this.currentUser));
  }

}
            //   result => {

            //   console.log('Result status: ' + result.status);
            //     if (result) {
            //         const logger = result;

            //         if (result.error && (result.error === 'no match')) {
            //           this.error = 'Password is incorrect';
            //           console.log(this.error);
            //           this.notes.sendNotice( {type: 'warning', message: ['Incorrect password, please try again.' ], delay: 1400} );
            //           // this.flashMessagesService.show(this.error,
            //           //     { cssClass: 'alert-warning', timeout: 7000 });
            //               this.loading = false;
            //         } else {
            //           if (result.error && (result.error === 'no user')) {
            //             this.error = 'Username not found in the system';
            //             console.log(this.error);
            //             this.notes.sendNotice( {type: 'warning', message: [this.error ], delay: 1400} );

            //             // this.flashMessagesService.show(this.error,
            //             //   { cssClass: 'alert-warning', timeout: 7000 });
            //           } else {
            //             if (this.userService.redirectUrl) {
            //               const wantedURL = this.userService.redirectUrl;
            //              // this.userService.redirectUrl = ''; // clear it out
            //             //  this.userService.redirectMsg = '';
            //               this.myRouter.navigateByUrl(this.userService.redirectUrl);
            //             } else {
            //             this.myRouter.navigate(['/home']); }
            //             console.log('AUTHENTICATED! - : ' + JSON.stringify(logger) );
            //           }
            //         }

            //     } else {
            //         console.log('NOT AUTHENTICATED!');
            //         this.flashMessagesService.show('Error with login',
            //           { cssClass: 'alert-warning', timeout: 7000 });
            //         this.loading = false;

            //     }
            // }
          // }

        // error => {
        //   console.log('Got an error (supposedly: ' + JSON.stringify(error));
        //   console.log('error code: ' + error.status);
        //    const tempUserName = this.loginForm.get('username').value;
        //     console.log(tempUserName);
        //     const foundUser = this.userService.findUserByUsername(tempUserName);
        //     if (foundUser) {
        //       this.error = 'Your Password is incorrect';
        //     } else {
        //       this.error = 'We didn\'t find that username in our system.';
        //     }

        //     this.flashMessagesService.show(this.error,
        //     { cssClass: 'alert-warning', timeout: 7000 });
        //     this.loading = false;
        //     return;
        //
      // }
   // );

// }


  // getInitialLoginStatus() {
  //   this.FB.getLoginStatus()
  //     .then( response => { this.fb_InitialStatusResponseObject = response;
  //       console.log ('Got Login Status: ' + JSON.stringify(response));
  //    } )
  //     .catch(console.error.bind(console));
  // }

  // processFBLoginStatusResponse() {

  //        console.log('FACEBOOK Initial Status: ');
  //        console.log(JSON.stringify(this.fb_statusResponseObject) );

  //        // If status is connected, then the user is already connected via facebook, and our app
  //        if (this.fb_statusResponseObject.status === 'connected') {
  //            console.log('in processFBLoginStatusREsonse: connected === true');
  //          this.alreadyConnectedThruFB = true;
  //          // this.getProfileForRegistration();
  //         this.getProfileOfLoggedInUser();
  //         // this.userService.loginFBUser( currentUser );
  //        }  else {
  //           this.FB.login({scope: 'public_profile,email'}).then(
  //           (response: LoginResponse) => {
  //           console.log(response);
  //           this.fb_responseObject = response;
  //           if (this.fb_responseObject.status === 'connected') {
  //               this.getProfileForRegistration();
  //           }
  //            }
  //       ).catch((error: any) =>
  //           console.error(error));
  //        }
  //      }

    // processFBProfile() {
    //   console.log('processing the profile');
    //     this.newFBUser = <User> {};
    //     const nameSplit = this.FBProfile.name.split(' ');
    //     if (nameSplit.length === 3 ) {
    //       this.newFBUser.firstname = nameSplit[0];
    //       this.newFBUser.middlename = nameSplit[1];
    //       this.newFBUser.lastname = nameSplit[2];
    //       this.newFBUser.username = nameSplit[0] + ' ' + nameSplit[2];
    //     }
    //     if (nameSplit.length === 2 ) {
    //       this.newFBUser.firstname = nameSplit[0];
    //       this.newFBUser.lastname = nameSplit[1];
    //       this.newFBUser.username = nameSplit[0] + ' ' + nameSplit[1];
    //     }

    //     console.log('user firstname: ' + this.newFBUser.firstname);
    //     console.log('user lastname: ' + this.newFBUser.lastname);
    //     this.newFBUser.email = this.FBProfile.email;
    //     console.log('user email: ' + this.newFBUser.email);
    //     this.newFBUser.facebookRegistration = true;
    //     this.newFBUser.avatar_URL = this.FBProfile.picture.data.url;
    //     console.log('user avatar: ' + JSON.stringify( this.FBProfile.picture) );
    //     console.log('user avatar url: ' + this.FBProfile.picture.data.url );

    //     this.registerFBUser( this.newFBUser );

    // }
/* We first search for an existing user with the same email address.
   If it's unique, then we'll go ahead and create a new user.
*/
//     registerFBUser( newFBUser: User) {
//       console.log('about to signup the user');

//               const existingUser = this.userService.findUserByEmail ( newFBUser.email );
//               if (existingUser && !existingUser.facebookRegistration ) {
//                 // Here we have a user in the system - who's email matches their FB account,
//                 // but they already have a non-facebook account.
//                 console.log('Double account.');
//                 // this.flashMessagesService.show('We already have an account for you with your email address.' +
//                 // + '  Please just login with your username and password.', { cssClass: 'alert-error', timeout: 14000 });
//                 const thisNotification = new LoomNotification('error',
//             ['We already have an account for you that is connect to your email address: ' + newFBUser.email +
//           ' <br>Please login with your username and password.' ], 5000);
//             this.notes.add( thisNotification );

//                 this.myRouter.navigate(['/login']);
//               } else {
//               if (existingUser === null) {
//                 console.log('no user found, so creating one.');
//                 this.createFBUser(newFBUser);
//                 this.userService.loginFBUser( newFBUser );
//                 this.myRouter.navigate(['/home']);
//               } else {
//                 console.log('existing account, so logging in FBUser');
//                 this.userService.loginFBUser( newFBUser );
//                 this.myRouter.navigate(['/home']);
//               }
//             }}

//     createFBUser( newFBUser: User) {
//       console.log('About to create a user: ' + JSON.stringify(newFBUser));

//                 this.userService.createUser( newFBUser ).subscribe(
//                   (val) => { console.log('POST call successful value returned in body ', val);
//                 //  this.userService.loginFBUser( val[0].id );
//                 },
//                   (error) => {console.log('POST call in error', error);

//                   this.myRouter.navigate(['/home']);
//                 },
//                   () => {console.log('The POST observable is now completed.');
//                     // this.alertService.success('Thank you for registering with the Reclaiming Loom. ' +
//                     //   ' Now, please check your email, and use the verification code to verify your account.  Thank you.', true);

//                       // this.userService.findUserByEmailFromDB(newFBUser.email).subscribe(
//                       //   (newUser) => {
//                       //     console.log('Found new FBUser in the DB by their email name: ' + newFBUser.email);
//                       //     this.userService.loginFBUser( newFBUser );
//                       //     // this.myRouter.navigate(['/home']);
//                       //     this.currentUser = newFBUser;

//                       //     this.flashMessagesService.show('Welcome to The Loom, ' + newFBUser.firstname,
//                       //     { cssClass: 'alert-success', timeout: 14000 });
//                       //    },
//                       //   (error) => console.log(error)

//                       //  );

//                      // this.myRouter.navigate(['/welcome']);
//                     });
//               }

//   getUserInfoFromFB() {
//         console.log('Getting the user profile from FB.');
//         this.FB.api('/me?fields=id,name,email,picture')
//         .then((res: any) => {this.FBProfile = res;
//           console.log('Got the users profile, based on the ID: ' +
//            this.fb_LoginResponseObject.authResponse.userID + ': ' + JSON.stringify( res ) );
//            console.log('including email: ' + this.FBProfile.email);

//            if (this.FBProfile.email) {
//              // we've got the users email address, so first we need to check out DB to see if this user is registered
//              this.processFBProfile();
//            }
//         })
//         .catch(this.handleError);
//       }




//    StartFBLogin() {
//     if (this.userService.currentUser) {
//         this.myRouter.navigate(['/home']);
//     } else {
//       this.FB.login({scope: 'public_profile,email'}).then(
//         (response: LoginResponse) => {
//         console.log( 'After Login call: the response is: ' + JSON.stringify(response));
//         this.fb_LoginResponseObject = response;
//         if (this.fb_LoginResponseObject.status === 'connected') {
//           console.log('getting user info from FB');
//             this.getUserInfoFromFB();
//         }
//          }
//     ).catch((error: any) =>
//         console.error(error));

//    }
// }

