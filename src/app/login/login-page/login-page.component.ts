import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// interface defines the structure of a user object, including the properties
interface User {
  username: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  // loginForm is a FormGroup instance that represents the form, including its controls and validation status.
  loginForm: FormGroup;

  // constructor initializes the loginForm using the FormBuilder instance. It sets up form controls with their respective validators
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
    });
  }

  // The onSubmit method checks if the loginForm is valid.
  onSubmit() {
    // If VALID, it sends an HTTP POST request to /users/INSERT? endpoint with the form data (username, password, and role)
    if (this.loginForm.valid) {
      this.http.post<User>('INSERT?', this.loginForm.value).subscribe(
        (response) => {
          // the user is authenticated, and the response object contains the authenticated user data
          console.log('User authenticated:', response);

          // if form is valid and which ever the user has as the role
          if (response.role === 'admin') {
            this.router.navigate(['/admin/home']);
          } else if (response.role === 'user') {
            this.router.navigate(['/end-user']);
          }
        },
        // handles errors
        (error) => {
          console.log('Authentication failed');
        }
      );
    } 
    // If NOT VALID, print message
    else {
      console.log('Form is not valid');
    }
  }
}
