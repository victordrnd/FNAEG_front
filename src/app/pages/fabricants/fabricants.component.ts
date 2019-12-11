import { Component, OnInit } from '@angular/core';
import {FabricantService} from '../../core/services/fabricant.service';

@Component({
  selector: 'app-fabricants',
  templateUrl: './fabricants.component.html',
  styleUrls: ['./fabricants.component.scss']
})
export class FabricantsComponent implements OnInit {

  fabricants:any;

  constructor(private fabricantService:FabricantService) { }

  async ngOnInit() {
    this.fabricants = await this.fabricantService.getAllFabricantPaginate().toPromise();
    console.log(this.fabricants);
  }

}
