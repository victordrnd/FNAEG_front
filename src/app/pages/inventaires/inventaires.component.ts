import { Component, OnInit } from '@angular/core';
import {InventaireService} from '../../core/services/inventaire.service'
@Component({
  selector: 'app-inventaires',
  templateUrl: './inventaires.component.html',
  styleUrls: ['./inventaires.component.scss']
})
export class InventairesComponent implements OnInit {
  inventaires;
  filter = {
    page: 1,
    creators : [],
    dateRange : []
  }
  constructor(private inventaireService : InventaireService) { }

  async ngOnInit() {
    this.inventaires = await this.inventaireService.getAllInventaire().toPromise();
    console.log(this.inventaires)
  }


  async onLoadMore(){
    this.filter.page++;
    const newInventaire = await this.inventaireService.getAllInventaire(this.filter.page).toPromise();
    newInventaire.data = [
      ...this.inventaires.data,
      ...newInventaire.data
    ]
    console.log(newInventaire)
    this.inventaires = newInventaire;
  }

  onChangeRange(){

  }
  sendFilter(){
    this.inventaireService.filter(this.filter).toPromise();
  }

}
