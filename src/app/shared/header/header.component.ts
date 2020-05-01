import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router,
    private userService : UserService) { }
  isAuthenticated;

  ngOnInit() {
    this.userService.isAuthenticated.subscribe(state => {
      this.isAuthenticated = state;
    })
  }

  logOut(){
    this.userService.purgeAuth();
    this.router.navigate(['']);
  }


}
