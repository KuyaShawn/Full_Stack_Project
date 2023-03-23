import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      title: ['', Validators.required]
    });
  }
  onSubmit() {
    // if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
  
    const title = this.loginForm.controls['title'].value;
  
    // if form is valid and which ever the user chooses as the title
    if (title === 'admin') {
      this.router.navigate(['/admin/home']);
    } else if (title === 'user') {
      this.router.navigate(['/end-user']);
    }
  }
}
