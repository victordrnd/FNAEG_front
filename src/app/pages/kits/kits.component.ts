import { Component, OnInit } from '@angular/core';
import { KitService } from '../../core/services/kit.service';
import { FabricantService } from '../../core/services/fabricant.service';
import { environment } from 'src/environments/environment';
import { ModalKitComponent } from './modal-kit/modal-kit.component';
import { NzMarks, NzModalService } from 'ng-zorro-antd';
import { CreateKitComponent } from './create-kit/create-kit.component';

@Component({
  selector: 'app-kits',
  templateUrl: './kits.component.html',
  styleUrls: ['./kits.component.scss']
})
export class KitsComponent implements OnInit {
  kits: any;
  range :Array<number> = [0, 300]
  filter = {
    min: this.range[0],
    max: this.range[1],
    fabricants: undefined,
    stock: false,
    page: 1,
    ordersBy: []
  };
  fabricants;
  marks: NzMarks = {
    0: '0€',
    300: '300€'
  }
  constructor(private kitService: KitService,
    private fabricantService: FabricantService,
    private modalService: NzModalService,
    ) {

  }

  async ngOnInit() {
    this.kits = await this.kitService.getAllKitPaginate().toPromise();
    this.fabricants = await this.fabricantService.getAllFabricant().toPromise();
  }

  async sendFilter() {
    this.kits = await this.kitService.filter(this.filter).toPromise();
  }

  async onExport() {
    window.open(`${environment.apiurl}/kit/export`, "_blank");
  }

  async changePage(index) {
    this.filter.page = index;
    this.sendFilter();
  }

  open() {
    this.modalService.info({
      nzTitle: 'Import de fichier XML',
      nzBodyStyle : {
        padding : '15px'
      },
      nzStyle : {
        padding: '5px'
      },
      nzContent: ModalKitComponent,
      nzWidth : 700,
      nzOnOk: async () => this.kits = await this.kitService.getAllKitPaginate().toPromise()
    });
  }

  rangeChange(range) {
    this.filter.min = range[0];
    this.filter.max = range[1];
    this.sendFilter();
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

  onOpenCreate(){
    const modalRef =this.modalService.info({
      nzTitle: "Creation d'un nouveau kit",
      nzBodyStyle : {
        padding : '15px'
      },
      nzStyle : {
        padding: '5px'
      },
      nzContent: CreateKitComponent,
      nzCancelDisabled : false,
      nzMaskClosable : true,
      nzOkText : 'Valider',
      nzWidth : 700,
      nzIconType : 'book',
      nzOkDisabled : true,
    });
    
    modalRef.afterClose.subscribe(async event => {
      this.kits = await this.kitService.getAllKitPaginate().toPromise();
    })
  }
}
