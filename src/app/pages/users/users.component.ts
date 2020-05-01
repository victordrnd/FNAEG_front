import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/core/services/utilisateur.service';
import { RoleService } from 'src/app/core/services/role.service';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UtilisateurService,
    private roleService: RoleService,
    private notificationService: NzNotificationService,
    private modalService : NzModalService) { }

  users;
  roles;
  filter = {
    keyword:''
  }
  async ngOnInit() {
    this.users = await this.userService.getAllUsers().toPromise();
    this.roles = await this.roleService.getAllRoles().toPromise();
  }


  updateRole(user) {
    user.role_id = user.role.id;
    this.userService.updateUser(user).toPromise();
    this.notificationService.success("Mis à jour réussi", `Le role de ${user.firstname} a été mis à jour`);
  }


  async deleteUser(user) {
    await this.userService.delete(user).toPromise();
    this.users = await this.userService.getAllUsers().toPromise();
    this.notificationService.success("Succès", `${user.firstname} a correctement été supprimé !`);
  }



  openCreateUserModal() {
    const modalRef = this.modalService.info({
      nzTitle: "Creation d'un nouvel utilisateur",
      nzBodyStyle: {
        padding: '15px'
      },
      nzStyle: {
        padding: '5px'
      },
      nzContent: CreateUserComponent,
      nzCancelDisabled: false,
      nzMaskClosable: true,
      nzOkText: 'Valider',
      nzWidth: 700,
      nzIconType: 'book',
      nzOkDisabled: true,
    });

    modalRef.afterClose.subscribe(async event => {
      this.users = await this.userService.getAllUsers().toPromise();
    })
  }


  editUser(user){
    const modalRef = this.modalService.info({
      nzTitle: "Edition d'utilisateur",
      nzBodyStyle: {
        padding: '15px'
      },
      nzStyle: {
        padding: '5px'
      },
      nzContent: EditUserComponent,
      nzCancelDisabled: false,
      nzMaskClosable: true,
      nzOkText: 'Valider',
      nzWidth: 700,
      nzIconType: 'book',
      nzOkDisabled: false,
      nzComponentParams : {
        user:user
      }
    });
    modalRef.afterClose.subscribe(async event => {
      this.users = await this.userService.getAllUsers().toPromise();
    })
  }

  async sendFilter() {
    this.users = await this.userService.filter(this.filter).toPromise();
  }
}

