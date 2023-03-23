import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
})
export class ViewUserComponent implements OnInit {
  users!: User[];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userService.getUsersList().subscribe((data) => {
      this.users = data;
    });
  }

  userDetails(id: number | undefined) {
    if (id !== undefined) {
      this.router.navigate(['user-details', id]);
    }
  }

  updateUser(id: number | undefined) {
    if (id !== undefined) {
      this.router.navigate(['update-user', id]);
    }
  }

  deleteUser(id: number | undefined) {
    if (id !== undefined) {
      this.userService.deleteUser(id).subscribe((data) => {
        console.log(data);
        this.getUsers();
      });
    }
  }
}
