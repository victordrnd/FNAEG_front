import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzNotificationService } from 'ng-zorro-antd';
import { FormBuilder, Validators } from '@angular/forms';
import { RoleService } from 'src/app/core/services/role.service';
import { UtilisateurService } from 'src/app/core/services/utilisateur.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  roles;
  form;

  constructor(private modal: NzModalRef,
    private fb: FormBuilder,
    private roleService : RoleService,
    private notificationService : NzNotificationService,
    private userService : UtilisateurService) {
      this.form = this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4)]],
        role_id : [1, Validators.required]
      })
     }

  async ngOnInit() {
    this.roles = await this.roleService.getAllRole().toPromise();
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
    this.userService.createUser(user).toPromise()
      .then(res => {
        this.notificationService.success("Succès","L'utilisateur a correctement été créé.");
      })
      .catch(err => {
        this.notificationService.create('error', "Erreur", `Le code du fabricant existe déjà`);
      });
  }

  get firstname() { return this.form.get('firstname'); }
  get lastname() { return this.form.get('lastname'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  get role_id(){return this.form.get('role_id');}

}
