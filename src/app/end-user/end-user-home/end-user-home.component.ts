import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-end-user-home',
  templateUrl: './end-user-home.component.html',
  styleUrls: ['./end-user-home.component.css'],
})
export class EndUserHomeComponent implements OnInit {
  form!: FormGroup;
  resources!: any[];

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.form = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.getResources();
  }

  getResources() {
    // GET request to retrieve all resources
    this.http
      .get<any[]>('/api/resources')
      .pipe(
        tap((response) => {
          this.resources = response;
        }),
        catchError((error) => {
          console.error(error);
          alert('Failed to retrieve resources.');
          return of([]);
        })
      )
      .subscribe();
  }

  onSubmit() {
    const formData = this.form.value;

    if (formData.id) {
      // PUT request to update an existing resource
      this.http
        .put(`/api/resources/${formData.id}`, formData)
        .pipe(
          tap(() => {
            console.log('Resource updated successfully!');
            this.getResources();
          }),
          catchError((error) => {
            console.error(error);
            alert('Failed to update resource.');
            return of(null);
          })
        )
        .subscribe();
    } else {
      // POST request to create a new resource
      this.http
        .post('/api/resources', formData)
        .pipe(
          tap(() => {
            console.log('Resource created successfully!');
            this.getResources();
          }),
          catchError((error) => {
            console.error(error);
            alert('Failed to create resource.');
            return of(null);
          })
        )
        .subscribe();
    }
  }

  onDelete(id: string) {
    // DELETE request to remove a resource
    this.http
      .delete(`/api/resources/${id}`)
      .pipe(
        tap(() => {
          console.log('Resource deleted successfully!');
          this.getResources();
        }),
        catchError((error) => {
          console.error(error);
          alert('Failed to delete resource.');
          return of(null);
        })
      )
      .subscribe();
  }

  onEdit(resource: any) {
    // Populate the form with the selected resource
    this.form.patchValue(resource);
  }
  onClear() {
    this.form.reset();
  }
}
