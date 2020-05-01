import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzMessageService, NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { KitService } from 'src/app/core/services/kit.service';
import { FabricantService } from 'src/app/core/services/fabricant.service';

@Component({
  selector: 'app-create-kit',
  templateUrl: './create-kit.component.html',
  styleUrls: ['./create-kit.component.scss']
})
export class CreateKitComponent implements OnInit {

  form: FormGroup;
  fabricants;
  constructor(
    private modal: NzModalRef,
    private fb: FormBuilder,
    private kitService: KitService,
    private notificationService: NzNotificationService,
    private fabricantService : FabricantService
  ) {
    this.form = this.fb.group({
      codekit: ['', Validators.required],
      duree: ['', Validators.required],
      annee: ['', Validators.required],
      prix: ['', Validators.required],
      codef: ['', Validators.required]
    })
   }

  async ngOnInit() {
    this.onValidated();
    this.modal.getContentComponent().modal.nzOnOk = this._onSubmit.bind(this);
    this.fabricants = await this.fabricantService.getMinimized().toPromise();
  }

  onValidated() {
    this.form.statusChanges.subscribe(val => {
      if (val == "VALID") this.modal.getContentComponent().modal.$$__nzOkDisabled = false
    })
  }

  _onSubmit() {
    let kit = this.form.value;
    kit.Annee = kit.Annee.toISOString().split('T')[0]
    this.kitService.create(kit).toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        this.notificationService.create('error', "Erreur", `Le code du kit existe déjà`);
      });
  }

  get codekit() { return this.form.get('codekit'); }
  get duree() { return this.form.get('duree'); }
  get annee() { return this.form.get('annee'); }
  get prix() { return this.form.get('prix'); }
  get codef() { return this.form.get('codef'); }
}
