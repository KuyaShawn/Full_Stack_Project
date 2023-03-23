import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}
  /*
  the ngOnInit method, it initializes the signUpForm property as a FormGroup using the FormBuilder. 
  It defines the form controls for first name, last name, email, and password with their initial values and validators.
  */
  ngOnInit() {
    this.signupForm = this.fb.group({
      /* The Validators.required are used to validate the input values of the form. 
      If a control's value is not valid, the form will be considered invalid.*/
      f_name: ['', Validators.required],
      l_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      title: ['', Validators.required],
    });
  }

  // The get form() method is a helper method that returns the controls of the form
  get form() {
    return this.signupForm.controls;
  }

  onSubmit() {
    console.log(this.signupForm.value);

    // if form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    const title = this.signupForm.controls['title'].value;

    // if form is valid, route to admin page
    if (title === 'Admin') {
      this.router.navigate(['/admin/home']);
    } else if (title === 'User') {
      this.router.navigate(['/end-user']);
    }
  }
}
