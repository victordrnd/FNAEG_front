import { Component, OnInit } from '@angular/core';
import {KitService} from '../../core/services/kit.service';
import {FabricantService} from '../../core/services/fabricant.service';
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
    stock: false,
    range : [60,180],
    page: 1 
  };
  fabricants;
  constructor(private kitService:KitService,
     private fabricantService:FabricantService, private modalService: NgbModal) { 

  }

   async ngOnInit() {
   this.kits = await this.kitService.getAllKitPaginate().toPromise();
   this.fabricants = await this.fabricantService.getAllFabricant().toPromise();
  }

  async sendFilter(){
    this.kits = await this.kitService.filter(this.filter).toPromise();
  }

  async onExport(){
    window.open(`${environment.apiurl}/kit/export`, "_blank");
  }

  async getpagination(url){
    const pagination = await this.kitService.getPage(url).toPromise();
  }

  async changePage(index){
    this.filter.page = index;
    this.sendFilter();
  }

  open() {
    const modalRef = this.modalService.open(ModalKitComponent);
  }

  rangeChange(range){
    this.filter.min = range[0];
    this.filter.max = range[1];
    this.sendFilter();
  }
}
