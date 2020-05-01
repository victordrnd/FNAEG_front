import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  form: FormGroup;


  constructor(private fb: FormBuilder,
    private userService: UserService,
    private notificationService: NzNotificationService,
    private router: Router) { }

  async ngOnInit() {
    this.form = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  async submitForm() {
    this.userService.attemptAuth(this.form.value).subscribe((res) => {
      this.router.navigate(['/dashboard'])
    },
      err => this.notificationService.error("Identifiants incorrects", "Les identifiants saisis ne correspondent à aucun compte."))

  }


  get email() { return this.form.get('email') }
  get password() { return this.form.get('password') }
}