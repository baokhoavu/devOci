import { Injectable, Component, OnInit, Input } from "@angular/core";
import {
  HttpHeaders,
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpEventType,
} from "@angular/common/http";
import {
  FormGroup,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from "@angular/forms";
// import { ErrorStateMatcher } from "@angular/material/core";
import { Router } from "@angular/router";
// import { DataService } from "../data.service";
// import { Observable, Subject, pipe } from "rxjs";
// import { take } from "rxjs/operators/take";
// import { map } from "rxjs/operators/map";
// import { Store } from "redux";
// import * as SampleJson from "../../assets/js/Data.json";

import "zone.js";
import "zone.js/dist/long-stack-trace-zone.js";

/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(
//     control: FormControl | null,
//     form: FormGroupDirective | NgForm | null
//   ): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(
//       control &&
//       control.invalid &&
//       (control.dirty || control.touched || isSubmitted)
//     );
//   }
// }

@Component({
  selector: "Login",
  templateUrl: "./login.html",
})
export class Login implements OnInit {
  // FormGroup for Validation
  //   loginForm: FormGroup;

  //   username: any;
  //   password: any;
  //   closed = false;
  //   hide = true;
  //   userError = false;
  //   passError = false;

  //   updateRegRes: JSON;

  //   // Matching the Error state
  //   matcher = new MyErrorStateMatcher();

  constructor() { // private router: Router // private http: HttpClient, // public dataService: DataService, // private usersService: UsersService,
    // Checking if the user is logged in, if so go to step 2
    // if (
    //   this.dataService.isLoggedIn() === true &&
    //   this.dataService.tokenExpired === false
    // ) {
    //   // console.log('Step 1: You are logged in already...');
    //   this.router.navigate(["/step-02"]);
    // }
    // this.dataService.loginTest();
  }

  //   @Input() isVisible = true;

  ngOnInit() {
    // Setting the FormGroup properties
    // this.loginForm = new FormGroup({
    //   userForm: new FormControl(this.username, Validators.required),
    //   passForm: new FormControl(this.password, Validators.required),
    // });
  }

  // Calling on the isLoggedIn() function from the global data service to check
  // the logged in state isLoggedIn() {     return this.dataService.isLoggedIn();
  // }
}
