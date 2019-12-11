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
    fabricants : undefined,
    stock: false
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

  async sendFilter(){
    console.log(this.filter)
    this.kits = await this.kitService.filter(this.filter).toPromise();
    console.log(this.kits.data)
  }

  async onExport(){
    await this.kitService.exportKit().subscribe((xml : string) => {
      var bb = new Blob([xml], {type: 'text/plain'});
      window.open(window.URL.createObjectURL(bb), "_blank");
    });
  }



  openUpdateModal(){
    //this.modalService.open(UpdateKit)
  }

}
