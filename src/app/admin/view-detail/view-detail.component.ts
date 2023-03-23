import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  id?: number;
  user?: User;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.params['id'];
    if (typeof idParam === 'number') {
      this.id = idParam;
  
      this.user = new User();
      this.userService.getUserById(this.id).subscribe( data => {
        this.user = data;
      });
    } else {
      console.error('Invalid or missing user ID');
    }
  }
}