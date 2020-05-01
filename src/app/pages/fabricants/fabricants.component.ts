import { Component, OnInit } from '@angular/core';
import {FabricantService} from '../../core/services/fabricant.service';
import { NzDrawerService, NzModalService } from 'ng-zorro-antd';
import { InfoFabricantComponent } from './info-fabricant/info-fabricant.component';
import { CreateFabricantComponent } from './create-fabricant/create-fabricant.component';

@Component({
  selector: 'app-fabricants',
  templateUrl: './fabricants.component.html',
  styleUrls: ['./fabricants.component.scss']
})
export class FabricantsComponent implements OnInit {

  fabricants:any;
  autocomplete;
  filter = {
    keyword : null,
    fabricants: [],
    ordersBy : [],
    page : 1
  }

  constructor(
    private fabricantService:FabricantService,
    private drawerService : NzDrawerService,
    private modalService : NzModalService) { }

  async ngOnInit() {
    this.fabricants = await this.fabricantService.getAllFabricantPaginate().toPromise();
    this.autocomplete = await this.fabricantService.getMinimized().toPromise();
  }


  async sendFilter() {
    this.fabricants = await this.fabricantService.filter(this.filter).toPromise();
  }

  openInfo(fabricant){
    const drawerRef =  this.drawerService.create<InfoFabricantComponent, { fabricant: any }, string>({
      nzTitle: fabricant.nom,
      nzContent: InfoFabricantComponent,
      nzContentParams: {
        fabricant: fabricant
      },
      nzWidth : 500
    });
  }

  onOpenCreate(){
    const modalRef =this.modalService.info({
      nzTitle: "Creation d'un nouveau fabricant",
      nzBodyStyle : {
        padding : '15px'
      },
      nzStyle : {
        padding: '5px'
      },
      nzContent: CreateFabricantComponent,
      nzCancelDisabled : false,
      nzMaskClosable : true,
      nzOkText : 'Valider',
      nzWidth : 700,
      nzIconType : 'book',
      nzOkDisabled : true,
    });
    
    modalRef.afterClose.subscribe(async event => {
      this.fabricants = await this.fabricantService.getAllFabricantPaginate().toPromise();
    })
  }


  sort(obj) {
    let deleted = false; 
    switch (obj.value) {
      case 'ascend':
        obj.value = "asc";
        break;
      case 'descend':
        obj.value = "desc";
        break;
      case null:
        this.filter.ordersBy.forEach((item, index) => {
          if (item.key == obj.key){
            deleted = true;
            this.filter.ordersBy.splice(index, 1);
          } 
        });
        break;
    }
    const found = this.filter.ordersBy.some((el,index) =>{

      if (el.key === obj.key){
        this.filter.ordersBy[index] = obj;
      }
      return el.key === obj.key;
      
    });
    if (!found && !deleted) this.filter.ordersBy.push(obj);
    this.sendFilter();
  }
  
  async changePage(index) {
    this.filter.page = index;
    this.sendFilter();
  }

}
