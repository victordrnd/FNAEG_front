import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzMessageService, NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { KitService } from 'src/app/core/services/kit.service';

@Component({
  selector: 'app-create-kit',
  templateUrl: './create-kit.component.html',
  styleUrls: ['./create-kit.component.scss']
})
export class CreateKitComponent implements OnInit {

  form: FormGroup
  constructor(
    private modal: NzModalRef,
    private fb: FormBuilder,
    private kitService: KitService,
    private notificationService: NzNotificationService
  ) {
    this.form = this.fb.group({
      CodeKit: ['', Validators.required],
      Duree: ['', Validators.required],
      Annee: ['', Validators.required],
      prix: ['', Validators.required],
      CodeF: ['', Validators.required]
    })
   }

  ngOnInit() {
    this.onValidated();
    this.modal.getContentComponent().modal.nzOnOk = this._onSubmit.bind(this);
  }

  onValidated() {
    this.form.statusChanges.subscribe(val => {
      if (val == "VALID") this.modal.getContentComponent().modal.$$__nzOkDisabled = false
    })
  }

  _onSubmit() {
    const kit = this.form.value;
    this.kitService.create(kit).toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        this.notificationService.create('error', "Erreur", `Le code du kit existe déjà`);
      });
  }

  get CodeKit() { return this.form.get('CodeKit'); }
  get Duree() { return this.form.get('Duree'); }
  get Annee() { return this.form.get('Annee'); }
  get prix() { return this.form.get('Prix'); }
  get CodeF() { return this.form.get('CodeF'); }
}
