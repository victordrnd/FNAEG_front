import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';
import { FormBuilder, Validators } from '@angular/forms';
import { RoleService } from 'src/app/core/services/role.service';

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
    private roleService : RoleService) {
      this.form = this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        role_id : [1, Validators.required]
      })
     }

  async ngOnInit() {
    this.roles = await this.roleService.getAllRole().toPromise();
  }

}
