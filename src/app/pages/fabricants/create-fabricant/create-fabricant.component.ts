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
      codef: ['', Validators.required],
      nom: ['', Validators.required],
      pays: ['', Validators.required],
      ville: ['', Validators.required]
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
        this.notificationService.success("Succès", `Le fabricant a correctement été créé`);
      })
      .catch(err => {
        this.notificationService.create('error', "Erreur", `Le code du fabricant existe déjà`);
      });
  }

  get codef() { return this.form.get('codef'); }
  get nom() { return this.form.get('nom'); }
  get pays() { return this.form.get('pays'); }
  get ville() { return this.form.get('ville'); }

}
