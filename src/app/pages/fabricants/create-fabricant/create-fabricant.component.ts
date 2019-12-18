import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzMessageService, NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FabricantService } from 'src/app/core/services/fabricant.service';

@Component({
  selector: 'app-create-fabricant',
  templateUrl: './create-fabricant.component.html',
  styleUrls: ['./create-fabricant.component.scss']
})
export class CreateFabricantComponent implements OnInit {

  form: FormGroup
  constructor(
    private modal: NzModalRef,
    private fb: FormBuilder,
    private fabricantService: FabricantService,
    private notificationService: NzNotificationService) {
    this.form = this.fb.group({
      CodeF: ['', Validators.required],
      Nom: ['', Validators.required],
      Pays: ['', Validators.required],
      Ville: ['', Validators.required]
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
    const fabricant = this.form.value;
    this.fabricantService.create(fabricant).toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        this.notificationService.create('error', "Erreur", `Le code du fabricant existe déjà`);
      });
  }

  get CodeF() { return this.form.get('CodeF'); }
  get Nom() { return this.form.get('Nom'); }
  get Pays() { return this.form.get('Pays'); }
  get Ville() { return this.form.get('Ville'); }

}
