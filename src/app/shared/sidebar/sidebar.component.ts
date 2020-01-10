import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public router: Router,
    private userService: UserService) { }
  isAuthenticated;
  ngOnInit() {
    this.userService.isAuthenticated.subscribe(state => {
      this.isAuthenticated = state;
    })
  }


  onExport() {
    if(this.isAuthenticated){
      window.open(`${environment.apiurl}/kit/export`, "_blank");
    }
  }
}
