import { Component, OnInit } from '@angular/core';
import {KitService} from '../../core/services/kit.service';
import {FabricantService} from '../../core/services/fabricant.service';
import { Options } from 'ng5-slider';
import { environment } from 'src/environments/environment';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalKitComponent } from './modal-kit/modal-kit.component';
@Component({
  selector: 'app-kits',
  templateUrl: './kits.component.html',
  styleUrls: ['./kits.component.scss']
})
export class KitsComponent implements OnInit {

  kits:any;
  filter = {
    min : 0,
    max :1000,
    fabricants : undefined,
    stock: false
  };
  options: Options = {
    floor: 0,
    ceil: 250,
    step: 10
  };
  fabricants;
  constructor(private kitService:KitService,
     private fabricantService:FabricantService, private modalService: NgbModal) { 

  }

   async ngOnInit() {
   this.kits = await this.kitService.getAllKitPaginate().toPromise();
   this.fabricants = await this.fabricantService.getAllFabricant().toPromise();
   console.log(this.kits);
  }

  async sendFilter(){
    console.log(this.filter)
    this.kits = await this.kitService.filter(this.filter).toPromise();
    console.log(this.kits.data)
  }

  async onExport(){
    window.open(`${environment.apiurl}/kit/export`, "_blank");
  }

  async getpagination(url){
    const pagination = await this.kitService.getPage(url).toPromise();
  }

  open() {
    const modalRef = this.modalService.open(ModalKitComponent);
  }

}
