import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  id?: number;
  user: User = new User();
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const idParam = this.route.snapshot.params['id'];
      if (typeof idParam === 'number') {
        this.id = idParam;
    
        this.userService.getUserById(this.id).subscribe(data => {
          this.user = data;
        }, error => console.log(error));
      } else {
        console.error('Invalid or missing user ID');
      }
    }

  onSubmit(){
    this.userService.updateUser(this.user).subscribe( data =>{
      this.goToUserList();
    }
    , error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }
}
