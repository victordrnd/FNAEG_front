import { Component, OnInit } from '@angular/core';
import {KitService} from '../../core/services/kit.service';
import {FabricantService} from '../../core/services/fabricant.service';
import { Options } from 'ng5-slider';
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
    fabricant : undefined,
    stock: null
  };
  options: Options = {
    floor: 0,
    ceil: 250
  };
  fabricants;
  constructor(private kitService:KitService,
     private fabricantService:FabricantService) { 

  }

   async ngOnInit() {
   this.kits = await this.kitService.getAllKitPaginate().toPromise();
   this.fabricants = await this.fabricantService.getAllFabricant().toPromise();
   console.log(this.kits);
  }

  sendFilter(){
    this.kits = this.kitService.filter(this.filter).toPromise();
    console.log(this.kits)
  }



  openUpdateModal(){
    //this.modalService.open(UpdateKit)
  }

}
