import { Component, OnInit } from '@angular/core';
import {FabricantService} from '../../core/services/fabricant.service';

@Component({
  selector: 'app-fabricants',
  templateUrl: './fabricants.component.html',
  styleUrls: ['./fabricants.component.scss']
})
export class FabricantsComponent implements OnInit {

  fabricants:any;
  filter = {
    keyword : '',
    fabricants: [],
    ordersBy : []
  }

  constructor(private fabricantService:FabricantService) { }

  async ngOnInit() {
    this.fabricants = await this.fabricantService.getAllFabricantPaginate().toPromise();
  }


  async sendFilter() {
    this.fabricants = await this.fabricantService.filter(this.filter).toPromise();
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

}
