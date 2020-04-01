import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NzModalRef, NzNotificationService } from 'ng-zorro-antd';
import { RoleService } from 'src/app/core/services/role.service';
import { UtilisateurService } from 'src/app/core/services/utilisateur.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  form;
  roles;
  constructor(private modal: NzModalRef,
    private fb: FormBuilder,
    private roleService : RoleService,
    private notificationService : NzNotificationService,
    private userService : UtilisateurService) { 
    
  }
  @Input() user;
  async ngOnInit() {
    this.form = this.fb.group({
      id : [this.user.id, Validators.required],
      firstname: [this.user.firstname, Validators.required],
      lastname: [this.user.lastname, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(4)]],
      role_id : [this.user.role.id, Validators.required]
    });

    this.roles = await this.roleService.getAllRoles().toPromise();
    this.onValidated();
    this.modal.getContentComponent().modal.nzOnOk = this._onSubmit.bind(this);
  }

  onValidated() {
    this.form.statusChanges.subscribe(val => {
      if (val == "VALID") this.modal.getContentComponent().modal.$$__nzOkDisabled = false
    })
  }

  _onSubmit() {
    const user = this.form.value;
    this.userService.updateUser(user).toPromise()
      .then(res => {
        this.notificationService.info("Succès","L'utilisateur a correctement été mis à jour.");
      })
      .catch(err => {
        this.notificationService.create('error', "Erreur", `Le code du fabricant existe déjà`);
      });
  }
  get id() { return this.form.get('id'); }
  get firstname() { return this.form.get('firstname'); }
  get lastname() { return this.form.get('lastname'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  get role_id(){return this.form.get('role_id');}

}
