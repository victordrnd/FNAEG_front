import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/core/services/utilisateur.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userService : UtilisateurService) { }

  users;
  async ngOnInit() {
    this.users = await this.userService.getAllUsers().toPromise();
  }

}
